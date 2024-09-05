export type Changelog = ChangeVersion[];

export interface ChangeVersion {
  version: string;
  release?: string;
  change?: Note[];
  add?: Note[];
  fix?: Note[];
  migration?: Note[];
  custom?: Note[];
}

export const ChangeCategory = ["change", "add", "fix", "migration", "custom"] as const;
export type ChangeCategory = (typeof ChangeCategory)[number];

type Note = string;
