const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;
  let dinosaurs2021;
  beforeEach(function () {
    dinosaur1 = new Dinosaur('Tyrannosaurus rex', 'Carnivore', 600)
    dinosaur2 = new Dinosaur('Anchiceratops', 'Herbivore', 250)
    dinosaur3 = new Dinosaur('Caudipteryx', 'Omnivore', 150)
    dinosaur4 = new Dinosaur('Avimimus', 'Omnivore', 80)
    dinosaur5 = new Dinosaur('Brontosaurus', 'Herbivore', 200)
    dinosaur6 = new Dinosaur('Tyrannosaurus rex', 'Carnivore', 600)

    dinosaurs2021 = [dinosaur1, dinosaur2, dinosaur3];
    park = new Park('Jurassic Park', 35, dinosaurs2021);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 35);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, dinosaurs2021);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addToCollection(dinosaur4);
    const actual = [dinosaur1, dinosaur2, dinosaur3, dinosaur4]
    assert.deepStrictEqual(actual, park.dinosaurs)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeFromCollection(dinosaur2);
    const actual = [dinosaur1, dinosaur3];
    assert.deepStrictEqual(actual, park.dinosaurs)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = dinosaur1;
    assert.deepStrictEqual(actual, park.mostPopular());
    
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addToCollection(dinosaur6);
    const actual = [dinosaur1, dinosaur6];
    assert.deepStrictEqual(actual, park.allDinosOfSpecies('Tyrannosaurus rex'))
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = 1000;
    assert.strictEqual(actual, park.totalNumOfGuestsPerDay());
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = 365000;
    assert.strictEqual(actual, park.guestsPerYear(false));
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = 12775000;
    assert.strictEqual(actual, park.yearlyEarnings());
  });

  it('should be able to remove all animals of a specific species', function(){
    park.addToCollection(dinosaur6);
    park.removeDinosBySpecies('Tyrannosaurus rex');
    const actual = [dinosaur2, dinosaur3];
    assert.deepStrictEqual(actual, park.dinosaurs);
  });
  
});
