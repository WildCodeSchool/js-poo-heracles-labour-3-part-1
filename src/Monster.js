class Monster extends Fighter {
  constructor(name, strength, dexterity, image, x, y, life) {
      super(name, strength, dexterity, image, x, y, life);
  }

  getDamage() {
    super.getDamage();
  }

  getDefense() {
    super.getDefense();
  }
}