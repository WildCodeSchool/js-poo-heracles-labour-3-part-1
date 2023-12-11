class Arena {
  constructor(hero, monsters, size) {
    this.monsters = monsters;
    this.hero = hero;
    this.size = size || 10;
  }

  getDistance(monster, hero) {
    return Math.sqrt(Math.pow(monster.x - hero.x, 2).toFixed(2) + Math.pow(monster.y - hero.y, 2)).toFixed(2);
  }

  isTouchable(hero, monster) {
    return this.getDistance(hero, monster) <= hero.getRange();
  }
}