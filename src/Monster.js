class Monster extends Fighter {
  constructor(name, strength, dexterity, image, x, y, life) {
      super(name, strength, dexterity, image, x, y, life);
  }

  fight() {
    return super.fight();
  }

  getDamage() {
    return super.getDamage();
  }

  getDefense() {
    return super.getDefense();
  }

  isAlive() {
    return super.isAlive();
  }
}