import { Directive,HostBinding,HostListener, Input} from "@angular/core"

@Directive({
    selector:'[mwFav]',

})

export class FavDirective {
    //set the class value is-favorite into the custom directive tag setting inside the mwFav setter methods from mediaItem value from the json
    @HostBinding('class.is-favorite') isFavorite =true;
    @HostBinding('class.is-favorite-hovering') hovering =false;

    @HostListener('mouseenter') onMouseEnter(){
        this.hovering=true;
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.hovering=false;
    }

    @Input() set mwFav(value){
        this.isFavorite=value
    }

}