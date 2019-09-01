import * as path from 'path';

import { getDirectoriesList } from './getDirectoriesList';

import console = require('console');

describe('Utilities — getDirectoriesList', () => {
  it('should return a list of directories', async () => {
    let dirList;

    try {
      dirList = await getDirectoriesList(path.join(__dirname, '../'));
    } catch (e) {
      console.error(`Error while using getDirectoriesList: ${e}`);
      throw e;
    }

    expect(Array.isArray(dirList)).toBe(true);
  });

  it('should throw an error if the directory does not exist', async () => {
    await expect(
      getDirectoriesList(path.join(__dirname, './test')),
    ).rejects.toThrow();
  });
});
