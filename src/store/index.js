/* eslint-disable-next-line */
import { createStore } from 'vuex';

import robotsModule from './modules/robots';
import usersModule from './modules/users';

export default createStore({
  state: {
    foo: 'root-foo',
  },
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
});
