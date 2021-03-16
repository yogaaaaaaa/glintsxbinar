class Person {
  static isAlive = true;

  constructor(name, address, isMarried, isEmployed) {
    this.name = name;
    this.address = address;
    this.isMarried = isMarried;
    this.isEmployed = isEmployed;
  }

  walk() {
    console.log(
      `${this.name} from ${this.address} is walking!, and is it employeed? ${this.isEmployed} `
    );
  }
  run() {
    console.log(
      `${this.name} from ${this.address} is running, and is employeed? ${this.isEmployed}`
    );
  }

  jogging() {
    this.walk();
    this.run();
  }

  //static method
  static talk(message) {
    console.log(`someone talk, "${message}"`);
  }
}

//add instance method
Person.prototype.watch = function(){
    console.log(`${this.name} is watching football!`);
}

//add static method
Person.sleep = function(){
    console.log(`tidurrrr`);
}

let person1 = new Person("Yoga", "Surabaya", false, true);
let person2 = new Person("Ina", "Jakarta", false, true);

person1.walk();
person1.run();
person2.walk();

person2.jogging();

//ganti value address
person1.address = "lumajang";
person2.address = "lumajang";
console.log(person2);
console.log(person1);

console.log(Person.isAlive);

Person.talk("halooo");

Person.sleep();

person1.watch();