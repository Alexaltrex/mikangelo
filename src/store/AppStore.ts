import { action, makeObservable, observable } from 'mobx';

export class AppStore {
  showBurgerMenu = false

  constructor() {
    makeObservable(this, {
      showBurgerMenu: observable,

      setShowBurgerMenu: action.bound,
    });
  }

  setShowBurgerMenu(showBurgerMenu: boolean) {
      this.showBurgerMenu = showBurgerMenu;
  }


}
