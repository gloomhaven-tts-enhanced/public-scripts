import { Argv } from "yargs";

import { format, parseISO } from "date-fns";
import { readFileSync } from "fs";
import { parse } from "yaml";

export interface Arguments {
  release: string;
  changeLog: string;
}

export const setupCommand = (yargs: Argv) => {
  yargs.command(
    "release-notes <release>",
    "Creates the release notes for different targets from the change log.",
    commandOptions,
    runCommand
  );
};

const commandOptions = (yargs: Argv) => {
  return yargs
    .positional("release", {
      type: "string",
      demandOption: true,
      description: "The version to use from the change log.",
    })
    .option("changeLog", {
      alias: "c",
      type: "string",
      demandOption: true,
      description: "Path to the change log.",
    });
};

const runCommand = (args: Arguments) => {
  const fileContent = readFileSync(args.changeLog, { encoding: "utf-8" });
  const changeLog = parse(fileContent);
  const change = findVersion(changeLog, args.release);

  if (!change) {
    console.error(`No version ${args.release} found in change log`);
    return;
  }

  convertToJson(changeLog, args.changeLog);
  const steamNotes = createSteamNotes(change);
  const discordNotes = createDiscordNotes(change);

  console.log(steamNotes);
  console.log();
  console.log("----------------------------");
  console.log();
  console.log(discordNotes);
};

const findVersion = (changeLog: any, version: any) => {
  for (const change of changeLog) {
    if (change.version === version) {
      return change;
    }
  }
};

const convertToJson = (changeLog: string, path: string) => {
  //TODO
};

const createSteamNotes = (change: any) => {
  let text = `Version ${change.version}\n\n`;

  const appendCategory = (name: string, key: string) => {
    const entries = change[key];
    if (entries) {
      text += `${name}\n[list]\n`;

      for (const entry of entries) {
        text += `[*] ${entry}\n`;
      }

      text += "[/list]\n\n";
    }
  };

  appendCategory("Breaking", "breaking");
  appendCategory("Known Issues", "known");
  appendCategory("Feature", "feature");
  appendCategory("Fix", "fix");

  return text.trim();
};

const createDiscordNotes = (change: any) => {
  const date = parseISO(change.release);
  const dateOut = format(date, "MMMM dd, yyyy");

  let text = `**v${change.version}** - ${dateOut}\n`;

  const appendCategory = (name: string, key: string) => {
    const entries = change[key];
    if (entries) {
      text += `_${name}_\n`;

      for (const entry of entries) {
        text += `* ${entry}\n`;
      }

      text += "\n";
    }
  };

  appendCategory("Breaking", "breaking");
  appendCategory("Known Issues", "known");
  appendCategory("Feature", "feature");
  appendCategory("Fix", "fix");

  return text.trim();
};
