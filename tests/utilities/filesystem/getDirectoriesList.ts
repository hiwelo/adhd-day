import * as fs from 'fs';
import * as util from 'util';

const readdir = util.promisify(fs.readdir);

export const getDirectoriesList = async source => {
  let directory;

  try {
    directory = await readdir(source, {
      encoding: 'utf-8',
      withFileTypes: true,
    });
  } catch (e) {
    throw e;
  }

  const dirList = directory
    .filter(item => item.isDirectory())
    .map(item => item.name);

  return dirList;
};
