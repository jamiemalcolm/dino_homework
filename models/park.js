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
Park.prototype.removeFromCollection = function(dinosuar){
    const index = this.dinosaurs.indexOf(dinosuar);
    if (index > -1){
        this.dinosaurs.splice(index, 1);
    } 
}
// find the dino that attracts most visitors 
// should be able to find the dinosaur that attracts the most visitors
Park.prototype.mostPopular = function(){
    let mostPopularDino;
    let numOfGuests = 0;
    for(currentDino of this.dinosaurs){
        if(currentDino.guestsAttractedPerDay > numOfGuests){
            mostPopularDino = currentDino;
            numOfGuests = currentDino.guestsAttractedPerDay;
        }
    }
    return mostPopularDino;
    
}

// find all dinos of particular species 

// calculate total number of visitors per day 

// calculate total number of visitors per year 

// calculate the totla revenue from ticket sales for a year 

module.exports = Park;