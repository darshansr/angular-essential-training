import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent  {

    
    name= "The Redemption"
    onDelete(){
      console.log("on delete value ")
    }
    

}
