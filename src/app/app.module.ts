import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondaryComponent } from './secondary/secondary.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, SecondaryComponent],
  entryComponents: [AppComponent, SecondaryComponent]
  // bootstrap: [AppComponent] // REMOVE THIS, as this will be done dynamically
})

export class AppModule implements DoBootstrap {
  // DoBootstrap Hook for manual bootstrapping of the application instead of using bootstrap array in @NgModule annotation.
  // This hook is invoked only when the bootstrap array is empty or not provided.
  // Refer : https://angular.io/api/core/DoBootstrap
  ngDoBootstrap(appName: ApplicationRef): void {
    fetch('API URL') // write function/API call for the specific component selection
      .then((name: string) => {
        const selected_component = localStorage.getItem('selected_component');
        bootstrapSelectedComponent(appName, selected_component ? selected_component : name);
      });
  }
}

// appName : Reference to the current application (ApplicationRef)
// componentName - componentName (selector) of the component to bootstrap
function bootstrapSelectedComponent(appName: ApplicationRef, componentName: string) {
  // List out the possible components for bootstrapping 
  // Set key as selectors (IMPORTANT)
  const components: any = {
    'app-root': AppComponent,
    'app-secondary': SecondaryComponent
  };
  // Get a reference to the DOM element that shows status and change the status once loaded
  const statusElement = document.querySelector('#componentLoader');
  if (statusElement) {
    statusElement.textContent = 'Loaded'
  }
  // create a new DOM element for the component being bootstrapped and add it to the DOM
  const componentElement = document.createElement(componentName);
  document.body.appendChild(componentElement);

  // bootstrap the application with the selected component
  const loaderComponent = components[componentName];
  appName.bootstrap(loaderComponent);
}

// DEMO Promise code, You can make an API call here 
// and get the bootstrapping component name/selector name dynamically
function fetch(url: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('app-secondary');
    }, 2000);
  });
}


/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */
