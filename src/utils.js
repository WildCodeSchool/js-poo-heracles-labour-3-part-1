/**
 * Class parent injecting the template (Children)
 * in the DOM where root is defined
 * @param {string} root (# dans le HTML)
 */
class TemplateRoot {
  constructor(root) {
    this.rootElement = document.getElementById(root);
  }

  render(template) {
    const fragment = document.createElement('div');
    fragment.innerHTML = template;
    this.rootElement.appendChild(fragment);
  }
}

class FightersTemplate extends TemplateRoot {
  constructor(root) {
    super(root);
  }

  createTemplate(hero, enemy) {
    const fighterTemplate = `<div class="fighters">
      <a href="#hero">
        <figure class="heracles">
          <img src="${hero.image}" alt="${hero.name}" />
          <figcaption>${hero.name}</figcaption>
        </figure>
      </a>
      <div class="fight">🗡️</div>
      <figure class="monster">
        <img src="${enemy.image}" alt="${enemy.name}" />
        <figcaption>${enemy.name}</figcaption>
      </figure>
    </div>`;

    this.render(fighterTemplate)
  }
}

/**
 * Class creating the Hero Information modal
 * @param {string} root
 */
class HeroInfoTemplate extends TemplateRoot {
  constructor(root) {
    super(root)
  }

  createHeroInfoTemplate(hero) {
    console.log(hero)
    const heroInfoTemplate = `<div class="hero" id="hero">
          <a href="#" class="close" onclick="closeModal()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
          </a>
          <div class="slots equipment" id="slot">
          <div data-slot="Main weapon" class="slot">
            <img src="${hero.weapon.image}" alt="weapon">
          </div>
          <div data-slot="Shield" class="slot">
            <img src="${hero.shield.image}" alt="shield">
          </div>
          <div data-slot="Secondary weapon" class="slot"></div>
          <div data-slot="Head" class="slot"></div>
          <div data-slot="Ring" class="slot"></div>
          <div data-slot="Armory" class="slot"></div>
          <div data-slot="Attack" class="slot statistic">
              ${hero.getDamage ? hero.getDamage() : ""}
          </div>
          <div data-slot="Defense" class="slot statistic">
              ${hero.getDefense ? hero.getDefense() : ""}
          </div>
          <div data-slot="Life" class="slot statistic">${hero.life}</div>
          <div data-slot="Range" class="slot statistic">${hero.getRange ? hero.getRange() : ""}</div>
      </div>
      <div class="character">
          <h2 class="name">Heracles</h2>
          <div class="avatar">
              <img src="${hero.image}" alt="heracles">
          </div>
          <p class="level">Level 1</p>
      </div>
    </div>`;

    this.render(heroInfoTemplate)
  }
}

/**
 * Class creating the HTML structure for the Arena
 * Will include all fighters with their own coordonates from the arena class
 * @param {string} root
 */
class ArenaTemplate extends TemplateRoot {
  constructor(root) {
    super(root);
  }

  checkFighters(arena, i, j) {
    let img = '';
    arena.monsters.forEach(monster => {
      if (monster.x === i && monster.y === j) {
        img = `<img
          title="Distance to ${arena.hero.name} ${arena.getDistance ? arena.getDistance(monster, arena.hero) : ""}" 
          alt="${monster.name}" src="${monster.image}"
          class="monster ${arena.isTouchable ? (arena.isTouchable(arena.hero, monster) ? 'touchable' : 'untouchable') : ""}"
        >`
      }
    })
    if (arena.hero.x === i && arena.hero.y === j) {
      img = `<img title="Mon Hero, portée de ${arena.hero.getRange ? arena.hero.getRange() : ""}" alt="${arena.hero.name}" src="${arena.hero.image}" >`
    }
    return img;
  }

  createArena(arena) {
    const arenaDiv = [];
    for (let i = 0; i < arena.size; i++) {
      for (let j = 0; j < arena.size; j++) {
        arenaDiv.push(`<div id="pos${i}${j}">
        ${this.checkFighters(arena, i, j)}
        </div>`);
      }
    }
    const arenaTemplate = `<div class="map" style="--tiles-number: ${arena.size}">
      ${arenaDiv.join('')}
    </div>`;

    this.render(arenaTemplate)
  }
}

