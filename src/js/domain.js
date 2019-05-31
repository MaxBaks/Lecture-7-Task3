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
    return this.powerMode ? this.at * 2 : this.at;
  }

  set attack(att) {
    this.at = att;
  }

  get defence() {
    return this.powerMode ? this.def * 2 : this.def;
  }

  set defence(att) {
    this.def = att;
  }

  get health() {
    return this.powerMode ? this.heal * 2 : this.heal;
  }

  set health(att) {
    this.heal = att;
  }
}
