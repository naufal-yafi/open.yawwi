import { existsSync } from 'fs';

export function checkFolder(folder: string): boolean {
  return existsSync(folder);
}
