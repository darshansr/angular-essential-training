import { Component } from "@angular/core"

@Component({
    /** To decorate a component, you need to provide two metadata properties at a minimum. 
     * Selector and template or template url.  */
    selector:'mw-app',
    templateUrl:"./app.component.html",
    styleUrls:['./app.component.css']/**if we needed to, we could add multiple CSS files to our 
    component and then simply add them to the array that we set to the styleUrls property */
})

export class AppComponent{
    
    firstMediaItem = {
        id: 1,
        name: 'Firebug',
        medium: 'Series',
        category: 'Science Fiction',
        year: 2010,
        watchedOn: 1294166565384,
        isFavorite: false
      };

    onMediaItemDelete(mediaItem){

    }

}