// function to declare park 
// name, ticket price, collection of dinos 
const Park = function (name, ticketPrice, dinosaurs) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
}

// function to add dinosaur to its collection of dinosaurs
Park.prototype.addToCollection = function(dinosaur){
    this.dinosaurs.push(dinosaur)
}

// remove a dinosaur from its collection 

// find the dino that attracts most visitors 

// find all dinos of particular species 

// calculate total number of visitors per day 

// calculate total number of visitors per year 

// calculate the totla revenue from ticket sales for a year 

module.exports = Park;