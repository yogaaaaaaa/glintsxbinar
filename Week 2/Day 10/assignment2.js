
let option = "negative";

let names = [
    {
        name: "john",
        status: "Positive"
    },
    {
        name: "Mike",
        status: "Suspect"
    },
    {
        name: "Ron",
        status: "Suspect"
    },
    {
        name: "Aaron",
        status: "Suspect"
    },
    {
        name: "Fedrivco",
        status: "Positive"
    }
];

switch(option){
    case "positive":
        let positive = names.filter((person) => person.status == "Positive");
    console.log("Positive ==========");
    positive.map((person, index)=>
        console.log(`${index+1}. ${person.name}`)
    );
    break;

    case "negative":
        let negative = names.filter((person) => person.status == "Suspect");
    console.log("Negative ==========");
    negative.map((person, index)=>
        console.log(`${index+1}. ${person.name}`)
    );
    break;

    default:
        console.log("this is default!");
  

}

//module.exports ={ inputRadius }
