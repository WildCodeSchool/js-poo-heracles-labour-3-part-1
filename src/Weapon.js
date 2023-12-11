class Weapon {
  constructor(name, damage, image, range) {
    this.name = name;
    this.damage = damage || 10;
    this.image = image;
    this.range = range || 0.5;
  }
}
