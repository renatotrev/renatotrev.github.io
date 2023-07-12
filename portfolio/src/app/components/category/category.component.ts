import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item/item.component';

export interface Category {
  name: string;
  id: string;
  items: Item[];
}

export interface CategoryClicked {
  event: Event;
  categoryId: string;
} 

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  host: { class: 'category'}
})
export class CategoryComponent {
  @Input() category!: Category;
  @Input() collapsed: boolean = false;
  @Output() categoryClicked: EventEmitter<CategoryClicked> = new EventEmitter<CategoryClicked>();

  clicked(event: Event, categoryId: string) {
    this.categoryClicked.emit({
      event,
      categoryId
    });
  }
}
