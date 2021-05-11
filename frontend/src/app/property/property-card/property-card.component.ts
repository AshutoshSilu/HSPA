import { Component } from '@angular/core';


@Component({
  selector:'app-property-card',
  templateUrl: 'property-card.component.html',
  styles: ['h1{font-weight: bold }']
}
  )

export class PropertyCardComponent
{
  Property:any={
    "Id" :1,
    "Name":"Rented House",
    "Type": "House",
    "Price": 20000
  }

}
