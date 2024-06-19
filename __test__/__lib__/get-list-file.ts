import { readdirSync } from 'fs';
import path from 'path';

export function getListFile(folder: string): string[] {
  try {
    const files = readdirSync(folder);
    return files.map((file) => path.join(file));
  } catch (e) {
    throw new Error('ENOENT: no such file or directory');
  }
}
