import * as path from 'path';
import { createStore } from 'redux';

import { reducer } from './reducer';
import { getDirectoriesList } from '../common';

import console = require('console');

const store = createStore(reducer);

describe('Reducers — combination', () => {
  it('should load all reducers from our data folder', async () => {
    const stateList = store.getState();
    let reducerList;

    try {
      reducerList = await getDirectoriesList(path.join(__dirname), {
        withFileTypes: true,
      });
    } catch (e) {
      console.error('Unable to get the list of directories in ./src/data');
      throw e;
    }

    reducerList.forEach(item => {
      expect(stateList).toHaveProperty(item);
    });
  });
});
