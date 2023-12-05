export class Player {
  public lifePoints: number;

  constructor() {
    this.lifePoints = 4000;
  }

  public getTakeDamage(damage: number): number {
    if (damage < this.lifePoints) {
      this.lifePoints = this.lifePoints - damage;
    }else{
      this.lifePoints = 0;
    }
    return this.lifePoints;
  }
}

