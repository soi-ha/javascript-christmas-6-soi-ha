import { Controller } from './domain/Controller.js';

class App {
  async run() {
    const controller = new Controller();
    await controller.openRestaurant();
  }
}

export default App;
