export default class Character {
  constructor(name, health, level, attack, defence) {
    this.name = name;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence; 

    this.powerMode = false;
    this.powerAttacks = 3;
  }

  get powerMode() {
    return this._powerMode;
  }

  set powerMode(modeEnable) {
    if (!this._modeBeenActivated) {
      this._powerMode = modeEnable;
      if (modeEnable) {
        this._modeBeenActivated = true;
      }
    }
    if (!modeEnable) {
      this._powerMode = false;
    }
  }

  makeAttackMove() {
    this.powerAttacks -= 1;
    if (this.powerAttacks === 0) {
      this.powerMode = false;
    }
  }

  get attack() {
    return this.powerMode ? this._attack * 2 : this._attack;
  }

  set attack(att) {
    return this._attack = att;
  }

  get defence() {
    return this.powerMode ? this._defence * 2 : this._defence;
  }

  set defence(att) {
    return this._defence = att;
  }

  get health() {
    return this.powerMode ? this._health * 2 : this._health;
  }

  set health(att) {
    return this._health = att;
  }
}
