/**
 * Server list page selectors
 */

import { createSelector } from 'reselect';
import _ from 'lodash';

const selectServerList = (state) => state.get('server-list');

const makeSelectToken = () => createSelector(
  selectServerList,
  (serverListState) => serverListState.get('token')
);

const makeSelectLoading = () => createSelector(
  selectServerList,
  (serverListState) => serverListState.get('loading')
);

const makeSelectError = () => createSelector(
  selectServerList,
  (serverListState) => serverListState.get('error')
);

const makeSelectServerList = (nameOrder = 'asc', distanceOrder = 'dec') => createSelector(
  selectServerList,
  (serverListState) => {
    const list = serverListState.get('list');
    if (list.size > 0) {
      return _.orderBy(list.toArray(), ['name', 'distance'], [nameOrder, distanceOrder]);
    }
    return [];
  }
);

export {
  selectServerList,
  makeSelectToken,
  makeSelectLoading,
  makeSelectError,
  makeSelectServerList,
};
