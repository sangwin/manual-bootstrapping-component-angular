# Manual Component Bootstrapping
### Created By [Sangwin Gawande](https://sangw.in)


I have created this project to understand how to bootstrap a specific component in Angular and that too dynamically. 
Yes. There is a hook in Angular which helps us achieve this. [DoBootstrap](https://angular.io/api/core/DoBootstrap).

[DoBootstrap](https://angular.io/api/core/DoBootstrap) Hook is for manual bootstrapping of the application instead of using bootstrap array in @NgModule annotation. 
This hook is invoked only when the bootstrap array is empty or not provided.

Check the demo out and let me know if it helps you too.

Run `npm install` and then `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`. 
The application will automatically reload if you change any of the source files.


[https://sangw.in](https://sangw.in)

-------

# NgManualBootstrapping

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Referred from  : [How to manually bootstrap an angular application](https://indepth.dev/posts/1203/how-to-manually-bootstrap-an-angular-application)
