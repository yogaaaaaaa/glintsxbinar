//arrow function

const x = (x, y) => {
    return x* y;
}
console.log(x(11,24));


//currying function
const calculate = (x)=>(y)=>(z)=>{
    return x * y * z;
};

console.log(calculate(11)(19)(24));

