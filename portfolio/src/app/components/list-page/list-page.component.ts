import { Component } from '@angular/core';
import Data from "../../../../mockup-data.json";
import { Category, CategoryClicked } from '../category/category.component';


interface CollapsedCategory {
  [key: string]: boolean;
}

@Component({
  selector: 'list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  host: {class: 'list-page'}
})
export class ListPageComponent {
  items: Category[] = Data;
  collapsedCategories: CollapsedCategory = {};

  ngOnInit() {
    console.log('Data', this.items);
  }

  categoryClicked(data: CategoryClicked) {
    this.collapsedCategories[data.categoryId] = !this.collapsedCategories[data.categoryId];
  }
}
