import { makeAutoObservable } from 'mobx';

export const settings = makeAutoObservable({
  zen: false,
  setZenMode(mode: boolean) {
    this.zen = mode;
  },
});
