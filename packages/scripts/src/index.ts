import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";
import { setupCommand as setupReleaseNotes } from "./commands/releaseNotes";

const argv = yargs(hideBin(process.argv));

setupReleaseNotes(argv);

argv.parseSync();
