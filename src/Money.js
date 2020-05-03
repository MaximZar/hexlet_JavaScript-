export default function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}
Money.prototype.getValue = function() {
    return this.value;
}
Money.prototype.getCurrency = function() {
    return this.currency;
}
Money.prototype.exchangeTo = function(currency) {
    if (this.getCurrency() === currency) {
        return new Money(this.getValue(), currency);
    }
    return currency === 'usd' ? new Money(this.getValue() * 1.2, 'usd') : new Money(this.getValue() * 0.7, 'eur');
}
Money.prototype.add = function(money) {
    console.log(this.getValue())
    console.log(money.getValue())
    if (this.getCurrency() !== money.getCurrency()) {
        return this.getCurrency() === 'usd' ?
        new Money(this.getValue() + money.exchangeTo('usd').getValue(), 'usd') :
        new Money(this.getValue() + money.exchangeTo('eur').getValue(), 'eur');
    }
    return new Money(this.getValue() + money.getValue(), this.getCurrency());
}
Money.prototype.format = function()  {
    return this.getCurrency() === 'usd' ? `\$${this.getValue()}` : `€${this.getValue()}`;
}

const money1 = new Money(100);
// console.log(money1.exchangeTo('eur').getValue()) //.toBe(70);
const money2 = new Money(200, 'eur');
// console.log(money1.getValue()) //.toBe(100);
// console.log(money2.getValue()) // 200
const money3 = money2.add(money1);
// console.log(money3.getValue()) //.toBe(270);

// const money4 = money1.add(money2);
// console.log(money4.getValue()) //.toBe(340);

const money6 = money3.add(money2);
console.log(money6.getCurrency())
console.log(money3.getCurrency())
console.log(money2.getCurrency())
console.log(money6.getValue()) //.toBe(470);