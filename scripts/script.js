class Character {
    constructor(name, healthPoints, armor, attackPower) {
        this._name = name;
        this._healthPoints = healthPoints;
        this._armor = armor;
        this._attackPower = attackPower;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    setNewName(name) {
        this._name = name;
    }

    get healthPoints() {
        return this._healthPoints;
    }

    set name(newHealthPoints) {
        this._healthPoints = newHealthPoints;
    }

    setNewHealthPoints(healthPoints) {
        this._healthPoints = healthPoints;
    }

    get armor() {
        return this._armor;
    }

    set armor(newArmor) {
        this._armor = newArmor;
    }

    setNewArmor(armor) {
        this._armor = armor;
    }

    get attackPower() {
        return this._attackPower;
    }

    set attackPower(newAttackPower) {
        this._attackPower = newAttackPower;
    }

    setNewAttackPower(attackPower) {
        this._attackPower = attackPower;
    }

    showCharacterDetails() {
        console.log(
            'Name: ' + this._name +
            ' HealthPoints: ' + this._healthPoints +
            ' Armor: ' + this._armor +
            ' AttackPower: ' + this._attackPower
        );
    }
}

class Generated extends Character {
    constructor(name, healthPoints, armor, attackPower) {
        super(name, healthPoints, armor, attackPower);
    }
}

class PlayerMade extends Character {
    constructor(name, healthPoints, armor, attackPower) {
        super(name, healthPoints, armor, attackPower);
    }
}

class Enemy extends Character {
    constructor(name, healthPoints, attackPower) {
        super(name, healthPoints);
        this._attackPower = attackPower;
    }
}

class RandomStatisticGenerators {
    playerName() {
        let characterNames = [
            "Revolver Butcher",
            "F3AR R3APER",
            "lx0 Shadow 0xl",
            "Oh Your Dead 1",
            "Chris P. Bacon",
            "Assasian",
            "ThatsMr.Noob",
            "EvilSantaHOHONO",
            "A Better Player",
            "XxXx3L1T3K1LL3RxXxX",
            "DuckNorris",
            "Tedrinnor",
            "Acerama",
            "Ziaand",
            "Etendaniel",
            "Nydoegan",
            "Galilith",
            "Dret",
            "Aliedia",
            "REFORMED",
            "Doom Slayer"
        ];
        return characterNames[Math.floor(Math.random() * (characterNames.length + 1))];
    }

    enemyName() {
        let enemyNames = [
            "Cryptclaw",
            "Arachnotron",
            "Cacodemon",
            "Carcass",
            "Whiplash",
            "Prowler",
            "Revenant",
            "Macubus",
            "Dread Knight",
            "Archvile",
            "Marauder",
        ];
        return enemyNames[Math.floor(Math.random() * (12 - 1 + 1)) + 1];
    }

    healthPoints() {
        return Math.floor(Math.random() * (500 - 300 + 1)) + 300;
    }
    armor() {
        return Math.floor(Math.random() * (50 - 20 + 1)) + 20;
    }
    attackPower() {
        return Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    }
}