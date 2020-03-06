import { Component, OnInit,Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent  {
@Input() mediaItem;
@Output() delete=new EventEmitter();

    //name= "The Redemption"
    onDelete(){
      console.log("on delete value ")
      this.delete.emit(this.mediaItem);
    }
    

}
