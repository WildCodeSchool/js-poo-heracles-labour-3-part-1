class Arena {
  constructor(hero, monsters, size) {
    this.monsters = monsters;
    this.hero = hero;
    this.size = size || 10;
  };

  getDistance(monster, hero) {
    return Math.sqrt(Math.pow(monster.x - hero.x, 2) + Math.pow(monster.y - hero.y, 2)).toFixed(0);
  };

  isTouchable(hero, monster) {
    return this.getDistance(monster, hero) <= hero.getRange();
  };

  move(direction) {
    const currentPos = {
      x: this.hero.x,
      y: this.hero.y
    };
  }
};