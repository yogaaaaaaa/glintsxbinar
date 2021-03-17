class Geometry {
  constructor(name, type) {
    if (this.constructor == Geometry) {
      throw new Error("cant make object");
    }
    this.name = name;
    this.type = type;
  }

  introduce() {
    this.#accessIntroduce();
  }
  #accessIntroduce() {
    console.log("hello, this is geometry");
  }
}

module.exports = Geometry;
