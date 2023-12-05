import {Player} from "./classe";

describe('Basic 2 classes', () => {
  let player: Player;

  beforeEach(() => {
    player = new Player();
  });

  it('should be return 2000 LP if the player takes 2000 of damage', () => {
    const res: number = player.getTakeDamage(2000);
    expect(res).toBe(2000);
  });

  it('should be return 1000 LP if the player takes 3000 of damage', () => {
    const res: number = player.getTakeDamage(3000);
    expect(res).toBe(1000);
  });

});
