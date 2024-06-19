import { getListFile } from './get-list-file';

export function checkFile(nameFile: string, folder: string): boolean {
  const files: string[] = getListFile(folder);
  let notFound: boolean = false;

  const result: string | undefined = files.find(
    (file: string) => file === nameFile,
  );

  if (result) {
    notFound = true;
  }

  return notFound;
}
