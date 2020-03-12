/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// Game Object Constructor
class GameObject {
    constructor(attr) {
        this.createdAt = attr.createdAt;
        this.name = attr.name;
        this.dimensions = attr.dimensions;
    }
    
    destroy() {
        return `${this.name} was removed from the game.`;
    }
  }  
  
  // Character Stats Constructor
  class CharacterStats extends GameObject {
      constructor(attr) {
          super(attr);
          this.healthPoints = attr.healthPoints;
      }
    
    takeDamage() {
        return `${this.name} took damage.`;
    }
  }
  
  // Humanoid Constructor
  class Humanoid extends CharacterStats {
    constructor(attr) {
        super(attr);
        this.team = attr.team;
        this.weapons = attr.weapons;
        this.language = attr.language;
    }
    
    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }

    attack(target) {
        return `${this.name} attacked ${target.name} with his ${this.weapons[(Math.floor(Math.random() * this.weapons.length))]}!`;
    }
  }
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  
  // Villian Constructor
  class Villian extends Humanoid {
    constructor(attr) {
        super(attr);
    }

    removeHealth() {
        this.healthPoints -= 5;
        if (this.healthPoints <= 0) return `${this.takeDamage()} ${this.destroy()}`;
        else return `${this.takeDamage()} ${this.healthPoints} HP remaining.`;
    }
  }

  // Hero Constructor
  class Hero extends Humanoid {
    constructor(attr) {
        super(attr);
        this.healthItems = attr.healthItems;
        this.maxHealth = attr.maxHealth;
    }

    removeHealth() {
        this.healthPoints -= 2;
        if (this.healthPoints <= 0) return `${this.takeDamage()} ${this.destroy()}`;
        else return `${this.takeDamage()} ${this.healthPoints} HP remaining.`;
    }

    heal() {
        this.healthPoints = this.maxHealth;
        this.healthItems -= 1;
        return `${this.name} drinks a potion. Health maxed out!`;
    }
  }
  
  
  const ganon = new Villian({
    createdAt: new Date(),
      dimensions: {
        length: 5,
        width: 8,
        height: 10,
      },
      healthPoints: 50,
      name: 'Ganon',
      team: 'Dark Realm',
      weapons: [
        'Giant Sword',
        'Dark Magic',
      ],
      language: 'Gerudo',
  })
  
  const link = new Hero({
    createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 1,
        height: 2,
      },
      healthPoints: 12,
      name: 'Link',
      team: 'Hyrule',
      weapons: [
        'Master Sword',
        'Bow',
        'Boomerang'
      ],
      language: 'Hylian',
      healthItems: 3,
      maxHealth: 12,
  })
  
  function linkAttacks() {
    if (link.healthItems > 0 && link.healthPoints <= 4) {
      console.log(link.heal());
    } else {
      console.log(link.attack(ganon));
      console.log(ganon.removeHealth());
    }
  }
  
  function ganonAttacks() {
    console.log(ganon.attack(link));
    console.log(link.removeHealth());
  }
  
  function fight() {
    while (ganon.healthPoints > 0 && link.healthPoints > 0) {
      const outcome = Math.floor(Math.random() * 2);
      outcome ? linkAttacks() : ganonAttacks();
    } 
  }
  
  fight();
  
  