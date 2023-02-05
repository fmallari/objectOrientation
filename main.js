alert("hello");

// Part One - create a class for vehicle ..

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
    return 'Beep';
}

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from{this.year}.`;
    }
    }




// Part Two - create class for a car. The car class should inehrit from vehicle and each car instance should have a property called numWheels which has a value of 4

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}



// Part Three - create class for a motorcycle. This class should inherit from a vehicle and each motocycle instance shoudl have a property called numWheels wich has a value of 2. It should also have a revEngine method which returns "VROOM!!"

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!";
    }
}


// Part Four - create a class for a garage ..

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry. we're full";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added";
    }
}