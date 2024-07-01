import { makeAutoObservable } from 'mobx';

export class SettingsStore {
  zen = false;

  constructor() {
    makeAutoObservable(this);
  }

  setZenMode(mode: boolean) {
    this.zen = mode;
  }
}

export const settings = new SettingsStore();
