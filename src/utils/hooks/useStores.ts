import React from 'react';
import { MobXProviderContext } from 'mobx-react';
import store from '../../store';

export const useStores = (): typeof store =>
  React.useContext(MobXProviderContext) as typeof store;
