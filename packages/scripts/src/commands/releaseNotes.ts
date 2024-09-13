import { Argv } from "yargs";

import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "fs";
import { parse } from "yaml";
import { ChangeCategory, Changelog, ChangeVersion } from "../model/changelog";
import path from "path";

const OUTDIR = `${__dirname}/../../../../changelog/tmp`;
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
    description: "Path to the change log directory.",
  });
};

const runCommand = (args: Arguments) => {
  prepare();

  for (const file of readdirSync(args.changeLog)) {
    if (file.endsWith(".yaml")) {
      const contentName = path.parse(file).name;
      mkdirSync(`${OUTDIR}/${contentName}`);

      const fileContent = readFileSync(`${args.changeLog}/${file}`, { encoding: "utf-8" });
      const changeLog = parse(fileContent) as Changelog;

      changeLog.forEach((version) => writeChanges(contentName, version));
    }
  }
};

const prepare = () => {
  if (existsSync(OUTDIR)) {
    rmSync(OUTDIR, { recursive: true });
  }
  mkdirSync(OUTDIR);
};

const writeChanges = (contentName: string, changes: ChangeVersion) => {
  const dir = `${OUTDIR}/${contentName}/${changes.version}`;
  mkdirSync(dir);

  createSteamNotes(changes, dir);
  createDiscordNotes(changes, dir);
};

const createSteamNotes = (change: ChangeVersion, dir: string) => {
  let text = `[h1]Version ${change.version}[/h1]\n\n`;

  const appendCategory = (name: string, key: ChangeCategory) => {
    const entries = change[key];
    if (entries) {
      text += `[h3]${name}[/h3]\n[list]\n`;

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
  let text = `**v${change.version}**\n`;

  const appendCategory = (name: string, key: ChangeCategory) => {
    const entries = change[key];
    if (entries) {
      text += `__${name}__\n`;

      for (const entry of entries) {
        text += `- ${entry}\n`;
      }

      text += "\n";
    }
  };

  CATEGORY_NAMES.forEach(([category, name]) => appendCategory(name, category));

  writeFileSync(`${dir}/discord.md`, text.trim(), { encoding: "utf-8" });
};
