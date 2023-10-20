//Constructor program

function car(name, mileage, max_speed) {
    this.name = name;
    this.mileage = mileage;
    this.max_speed = max_speed;
    console.log("Name of the car : " +name);
    console.log("Mileage of the car : "+mileage);
    console.log("Max speed of the car : "+max_speed);
  }

  const model = new car("Seltos", 17, 167);