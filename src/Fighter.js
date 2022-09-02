const MAX_LIFE = 100

class Fighter {
  constructor(name, strength, dexterity, image) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.image = image;
    this.weapon = null;
    this.shield = null;
  }

  /**
   * Launch a strike
   * @param Fighter defender
   */
 fight(defender) {
    let attackPoints = this.getRandomInt(this.getDamage());
    let damages = Math.max(attackPoints - defender.getDefense(), 0)
    defender.life = Math.max(defender.life - damages, 0);
  }


  /**
   * Calculate the value of the defense
   * @returns
   */
  getDamage() {
    return this.weapon ?
      this.strength + this.weapon.damage :
      this.strength;
  }


  /**
   * Calculate the value of the attack
   * @returns
   */
  getDefense() {
    return this.shield ?
      this.dexterity + this.shield.protection :
      this.dexterity;
  }

  /**
   * Make a random number between 1 and 100
   * @param Number max
   * @returns Number
   */
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }


  /**
  * Check if the fighters is still alive
  * @returns Boolean
  */
  isAlive() {
    return this.life > 0
  }
}

