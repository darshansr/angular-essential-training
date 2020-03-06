import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent  {
@Input() mediaItem;
    
    //name= "The Redemption"
    onDelete(){
      console.log("on delete value ")
    }
}
