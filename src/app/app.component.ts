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
    
    firstMediaItems = [
      {
        id: 1,
        name: 'Firebug',
        medium: 'Series',
        category: 'Science Fiction',
        year: 2010,
        watchedOn: 1294166565384,
        isFavorite: false
      },
      {
        id: 2,
        name: 'The Small Tall',
        medium: 'Movies',
        category: 'Comedy',
        year: 2015,
        watchedOn: null,
        isFavorite: true
      }, {
        id: 3,
        name: 'The Redemption',
        medium: 'Movies',
        category: 'Action',
        year: 2016,
        watchedOn: null,
        isFavorite: false
      }, {
        id: 4,
        name: 'Hoopers',
        medium: 'Series',
        category: 'Drama',
        year: null,
        watchedOn: null,
        isFavorite: true
      }, {
        id: 5,
        name: 'Happy Joe: Cheery Road',
        medium: 'Movies',
        category: 'Action',
        year: 2015,
        watchedOn: 1457166565384,
        isFavorite: false
      }
    ];
    onMeditDeletItem(mediaItem){

    }

}