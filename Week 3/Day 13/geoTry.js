const {Square, Rectangle, Triangle, Cube, Cone, Beam, Tube}= require("./geometry");

// let trySquare = new Square(17);
// trySquare.introduce("Haiii");
// trySquare.calculateArea();


// let tryRectangle = new Rectangle(11, 12);
// tryRectangle.introduce("hellooooou")
// tryRectangle.calculateArea();

// let tryTriangle = new Triangle(11, 10);
// tryTriangle.introduce("Halo ");
// tryTriangle.calculateArea();

let tryCube = new Cube(11);
tryCube.introduce("Halo semua ");
tryCube.calculateVolume();

let tryCone = new Cone(9, 4);
tryCone.introduce("Halo semua mau itung cone nih, ");
tryCone.calculateVolume();

let tryBeam = new Beam(10, 2, 4);
tryBeam.introduce("Halo semua mau itung beam nih, ");
tryBeam.calculateVolume();

let tryTube = new Tube(9, 4);
tryTube.introduce("Halo semua mau itung tube nih, ");
tryTube.calculateVolume();