import { Component } from '@angular/core';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent {

  constructor() { }

  onSubmit(mediaItem){
    console.log("mediaItem",mediaItem)
  }

}
