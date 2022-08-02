import { create } from 'mobx-persist';
import GeocodeStore from './geocode.store';

class RootStore {
  geocode: GeocodeStore;

  constructor() {
    this.geocode = new GeocodeStore();
  }
}

const store = new RootStore();
const hydrate = create({
  storage: localStorage,
});

hydrate('geocode', store.geocode);

export { GeocodeStore };
export default store;
