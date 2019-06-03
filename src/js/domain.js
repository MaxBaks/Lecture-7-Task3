export default class Character {
  constructor(name, health, level, attack, defence) {
    this.name = name;
    this.level = level;
    this.heal = health;
    this.att = attack;
    this.def = defence;

    this.powerMode = false;
    this.powerAttacks = 3;
  }

  get powerMode() {
    return this.pMode;
  }

  set powerMode(modeEnable) {
    if (!this.modeBeenActivated) {
      this.pMode = modeEnable;
      if (modeEnable) {
        this.modeBeenActivated = true;
      }
    }
    if (!modeEnable) {
      this.pMode = false;
    }
  }

  makeAttackMove() {
    this.powerAttacks -= 1;
    if (this.powerAttacks === 0) {
      this.powerMode = false;
    }
  }

  get attack() {
    return this.powerMode ? this.att * 2 : this.att;
  }

  get defence() {
    return this.powerMode ? this.def * 2 : this.def;
  }

  get health() {
    return this.powerMode ? this.heal * 2 : this.heal;
  }
}
