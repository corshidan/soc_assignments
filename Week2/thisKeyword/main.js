const train = {
  brand: "Audi",
  doors: 4,
  isEngineOn: false,
  startEngine: function () {
    console.log("The engine was turned on!");
    this.isEngineOn = true;
  },
  findBrand: function () {
    console.log(`The brand of the car is ${this.brand}`);
  },
};
