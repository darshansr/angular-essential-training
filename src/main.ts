/** With an Angular root module and a starting component created the next step to getting the 
 * foundation of an Angular app up and running is the code to Bootstrap the module.
 *  We can use a file named Main.ts in the app folder and put the bootstrap 
 * logic in this file. 
 * ******************************************88888888**********
 * Angular actually has support for running on multiple platforms. 
 * 1)The browser is considered a platform. 
 * 2)The server and web worker are examples of other platforms. 
 * 3)Other 3rd party bootstraps could also be used to provide support on other platforms.  */

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from './app/app.module';

 /**Note that earlier we were importing class types and here we are importing a function. 
  * The module loading syntax supports importing all kinds of exported things from class types, 
  * and functions to constants, variables, and even JSON file data.  */
 platformBrowserDynamic().bootstrapModule(AppModule)
