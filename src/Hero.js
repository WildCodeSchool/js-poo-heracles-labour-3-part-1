class Hero extends Fighter {
  constructor(name, strength, dexterity, image, x, y, life, weapon = null, shield = null) {
      super(name, strength, dexterity, image, x, y, life);
      this.weapon = weapon;
      this.shield = shield;
  }

  getWeaponDamage() {
    return this.weapon ? this.weapon.damage : 0;
}

  // Get Protection from the shield if the shield is assigned
  getShieldProtection() {
      return this.shield ? this.shield.protection : 0;
  }

  // Method to calculate Damage done (Fighter Strength + Weapon Damage)
  getDamage() {
      return super.getDamage() + this.getWeaponDamage();
  };

  // Method to calculate Defense achieved (Fighter Dexterity + Shield Protection)    
  getDefense() {
      return super.getDefense() + this.getShieldProtection();
  };
}