import {NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from './media-item/media-item.component';
import { FavDirective} from './fav.directive';
import { MediaItemListComponent } from './media-item-list/media-item-list.component'
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component'
const lookupLists = {
    mediums:['Movies','Series']
}


@NgModule({
    imports:[BrowserModule,ReactiveFormsModule], /*The imports property is used to bring in
                other Angular modules that your module will need.*/

    declarations:[ AppComponent, MediaItemComponent,FavDirective, MediaItemListComponent,CategoryListPipe, MediaItemFormComponent],/*The declarations property is used to make
                        components, directives, and pipes
                        available to your module
                        that don't come from another module.*/

    bootstrap:[ AppComponent], /*The bootstrap property is used for a root module
    and will let Angular know which component or components
    will be the starting point for the bootstrap process.*/

    providers:[
        {provide:'lookupListToken',useValue:lookupLists}
    ]

   

})

/**Since we are building this module in its own file,
and will want to import into another file,
we need to provide support
for using the module loading syntax.
You do this by using the export keyword
in front of the class keyword. */
export class AppModule{

}