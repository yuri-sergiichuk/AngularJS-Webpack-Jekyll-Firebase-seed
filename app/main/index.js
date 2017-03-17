import angular from "angular";
import MainController from "./main.controller";

export default angular.module('main', [])
    .controller('MainController', MainController)
    .name;