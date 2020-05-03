const make = (numer, denom) => ({
    numer,
    denom,
    getNumer() {
        return this.numer;
    },
    getDenom() {
        return this.denom;
    },
    toString() {
        return `${this.numer}/${this.denom}`;
    },
    add(rat2) {
        const rebuildRat1 = this.numer * rat2.getDenom();
        const rebuildRat2 = rat2.getNumer() * this.denom;
        const commonDemon = this.denom * rat2.getDenom();
        return make(rebuildRat1 + rebuildRat2, commonDemon);
    },
  });
  const rat1 = make(3, 9);
  console.log(rat1.add(make(10, 3)));
  export default make;