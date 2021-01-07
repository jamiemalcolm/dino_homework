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
    for(let currentDino of this.dinosaurs){
        if(currentDino.guestsAttractedPerDay > numOfGuests){
            mostPopularDino = currentDino;
            numOfGuests = currentDino.guestsAttractedPerDay;
        }
    }
    return mostPopularDino;
    
}

// find all dinos of particular species 
Park.prototype.allDinosOfSpecies = function(species){
    let dinosOfSpecies= [];
    for(let currentDino of this.dinosaurs){
        if(currentDino.species === species){
            dinosOfSpecies.push(currentDino);
        }
    }
    return dinosOfSpecies;
}

// calculate total number of visitors per day 
Park.prototype.totalNumOfGuestsPerDay = function(){
    let total = 0;
    for(let currentDino of this.dinosaurs){
        total = total + currentDino.guestsAttractedPerDay;
        
    }
    return total;
}

// calculate total number of visitors per year 
Park.prototype.guestsPerYear = function(leapYear){
    if(leapYear === true){
        let guestDay = this.totalNumOfGuestsPerDay();
        let guestsYear = guestDay * 366;    
    }else{
        guestDay = this.totalNumOfGuestsPerDay();
        guestsYear = guestDay * 365;
    }
    return guestsYear;
}
// calculate the totla revenue from ticket sales for a year 
Park.prototype.yearlyEarnings = function(leapYear) {
    let yearlyEarnings = this.guestsPerYear(leapYear) * this.ticketPrice;
    return yearlyEarnings;
}

// Remove all dinosaurs of a particular species
Park.prototype.removeDinosBySpecies = function(species){
    dinosToRemove = this.allDinosOfSpecies(species);
    for(let currentDino of dinosToRemove){
        this.removeFromCollection(currentDino);
    }
    return this.dinosaurs;
}

// Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type
// Example: { 'carnivore': 5, 'herbivore': 2, 'omnivore': 1 }
Park.prototype.dinosWithDiets = function(){
    let dinosWithDiets = {
        Carnivore: 0,
        Herbivore: 0,
        Omnivore: 0,
    };
    for(let currentDino of this.dinosaurs){
        if(currentDino.diet === 'Carnivore'){
            dinosWithDiets.Carnivore +=1;
        }else if(currentDino.diet === 'Herbivore'){
            dinosWithDiets.Herbivore +=1;
        }else{
            dinosWithDiets.Omnivore +=1;
        }
    }
    return dinosWithDiets;
}

module.exports = Park;