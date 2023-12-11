const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity, image, x, y, range = 1, life = MAX_LIFE) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.image = image;
        this.x = x;
        this.y = y;
        this.range = range;
        this.life = life;
    };
    
    // Method to calculate Damage done
    getDamage() {
        return this.strength;
    };

    // Method to calculate Defense achieved    
    getDefense() {
        return this.dexterity;
    };

    getRange() {
        return this.range;
    }
    
    fight(enemy) {
      const damageDone = Math.floor(Math.random() * this.getDamage() - 1) + 1;
      const damageTaken = Math.max(0, damageDone - enemy.getDefense());
      enemy.life = Math.max(0, (enemy.life - damageTaken));
    }

    isAlive() {
      return this.life > 0
    };  
};