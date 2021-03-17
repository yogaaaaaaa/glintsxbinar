const {Square, Rectangle, Triangle}= require("./geometry");

let trySquare = new Square(17);
trySquare.calculateArea();

let tryRectangle = new Rectangle(11, 12);
tryRectangle.calculateArea();

let tryTriangle = new Triangle(11, 10);
tryTriangle.calculateArea();
