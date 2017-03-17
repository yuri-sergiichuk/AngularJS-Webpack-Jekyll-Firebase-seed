export default class MainController {
    constructor() {
        console.log('Yeaaah');
        this.name = 'World';
    }

    changeName(name) {
        this.name = name;
    }
}

MainController.$inject = [];