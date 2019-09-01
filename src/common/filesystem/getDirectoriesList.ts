import * as fs from 'fs';
import * as util from 'util';

const readdir = util.promisify(fs.readdir);

export const getDirectoriesList = async (source, options) => {
  let directory;

  try {
    directory = await readdir(source, options);
  } catch (e) {
    throw e;
  }

  const dirList = directory
    .filter(item => item.isDirectory())
    .map(item => item.name);

  return dirList;
};
