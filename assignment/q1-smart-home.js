/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/

class BaseSignal {
  constructor() {
    if (new.target === BaseSignal) {
      throw new Error("This class cannot be instantiated directly");
    }
  }

  send(type) {
    console.log(`Sending ${type} signal`);
  }
}

class TvSignal extends BaseSignal {
  constructor() {
    super();
  }
}

class AirconSignal extends BaseSignal {
  constructor() {
    super();
  }
}

class DoorSignal extends BaseSignal {
  constructor() {
    super();
  }
}

const tv = new TvSignal();
tv.send("tv"); // prints "Sending tv signal"

const door2 = new DoorSignal();
door2.send("door2"); // prints "Sending tv signal"

const door = new DoorSignal();
door.send("door"); // prints "Sending door signal"

const aircon = new AirconSignal();
aircon.send("aircon"); // prints "Sending aircon signal"
