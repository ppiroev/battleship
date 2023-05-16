class Ship {
  constructor(length) {
    this.length = length;
    this.hit = 0;
  }

  onHit() {
    this.hit += 1;
  }

  isSunk() {
    if (this.hit === this.length) {
      return true;
    } else 
    {return false;}
  }
}

export { Ship };
