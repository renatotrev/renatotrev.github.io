import { Component, HostBinding, HostListener, Input } from '@angular/core';

export interface Item {
  name: string;
  image: string;
}

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  host: {class: 'item'},
})
export class ItemComponent {
  @Input() item!: Item;
  @HostListener('click', ["$event"]) onClick(event: Event) {
    event.stopPropagation();
  }

}
