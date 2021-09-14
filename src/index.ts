import { readFileSync } from 'fs';
import { PackageJson } from 'type-fest';

export function readPackageJsonSync(path = './package.json', encoding: BufferEncoding = 'utf-8'): PackageJson {
  return JSON.parse(readFileSync(path, encoding)) as PackageJson;
}
