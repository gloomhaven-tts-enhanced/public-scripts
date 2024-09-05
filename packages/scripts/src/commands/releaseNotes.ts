import { Argv } from "yargs";

import { format, parseISO } from "date-fns";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { parse } from "yaml";
import { ChangeCategory, Changelog, ChangeVersion } from "../model/changelog";

const OUTDIR = "./tmp";
const CATEGORY_NAMES: [ChangeCategory, string][] = [
  ["change", "Changed"],
  ["add", "Added"],
  ["fix", "Fixed"],
  ["migration", "Migration Information"],
  ["custom", "Custom Content Information"],
];

export interface Arguments {
  changeLog: string;
}

export const setupCommand = (yargs: Argv) => {
  yargs.command(
    "release-notes",
    "Creates the release notes for different targets from the change log.",
    commandOptions,
    runCommand
  );
};

const commandOptions = (yargs: Argv) => {
  return yargs.option("changeLog", {
    alias: "c",
    type: "string",
    demandOption: true,
    description: "Path to the change log.",
  });
};

const runCommand = (args: Arguments) => {
  prepare();

  const fileContent = readFileSync(args.changeLog, { encoding: "utf-8" });
  const changeLog = parse(fileContent) as Changelog;

  changeLog.forEach(writeChanges);
};

const prepare = () => {
  if (existsSync(OUTDIR)) {
    rmSync(OUTDIR, { recursive: true });
  }
  mkdirSync(OUTDIR);
};

const writeChanges = (changes: ChangeVersion) => {
  const dir = `${OUTDIR}/${changes.version}`;
  mkdirSync(dir);

  createSteamNotes(changes, dir);
  createDiscordNotes(changes, dir);
};

const createSteamNotes = (change: ChangeVersion, dir: string) => {
  let text = `Version ${change.version}\n\n`;

  const appendCategory = (name: string, key: ChangeCategory) => {
    const entries = change[key];
    if (entries) {
      text += `${name}\n[list]\n`;

      for (const entry of entries) {
        text += `[*] ${entry}\n`;
      }

      text += "[/list]\n\n";
    }
  };

  CATEGORY_NAMES.forEach(([category, name]) => appendCategory(name, category));

  writeFileSync(`${dir}/steam.txt`, text.trim(), { encoding: "utf-8" });
};

const createDiscordNotes = (change: ChangeVersion, dir: string) => {
  const date = parseISO(change.release ?? "1970-01-01");
  const dateOut = format(date, "MMMM dd, yyyy");

  let text = `**v${change.version}** - ${dateOut}\n`;

  const appendCategory = (name: string, key: ChangeCategory) => {
    const entries = change[key];
    if (entries) {
      text += `_${name}_\n`;

      for (const entry of entries) {
        text += `* ${entry}\n`;
      }

      text += "\n";
    }
  };

  CATEGORY_NAMES.forEach(([category, name]) => appendCategory(name, category));

  writeFileSync(`${dir}/discord.md`, text.trim(), { encoding: "utf-8" });
};
