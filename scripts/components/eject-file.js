import {
  text,
} from '@clack/prompts';
import fs from 'fs';
import 'dotenv/config';
import { removeFilesFromReadonly } from './lock-autogenerated-files.js';
import { getFileHeader } from './file-header.js';

export const ejectFile = async (config) => {
  const file = await text({
    message: 'Which file would you like to eject?',
    placeholder: 'e. g. "packages/components/src/components/alert"',
    validate(value) {
      if (!fs.existsSync(value)) return 'File not found';
    }
  });
  if (!file) return;

  // remove first 5 lines from file
  const fileContent = fs.readFileSync(file, 'utf8');
  fs.writeFileSync(file, fileContent.replace(getFileHeader(), ''));


  if (config.lockFilesForVSCode) {
    removeFilesFromReadonly([file.replace(/\\/g, "/")]);
  }

  // TODO: remove from gitignore
}
