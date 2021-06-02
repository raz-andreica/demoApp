import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import {Application, ObservableArray, SearchBar} from '@nativescript/core'

class DataItem {
  constructor(public name: string) { }
}

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  myItems: ObservableArray<DataItem> = new ObservableArray<DataItem>();
  searchPhrase: string;
  bands = ["BMW 5 Series","Ford KA","Smart","Kia Sorento","Mazda MX-5","Mercedes S-Class Cabriolet"];
  private arrayItems: Array<DataItem> = [];
  constructor() {
    for (const value of this.bands) { this.arrayItems.push(new DataItem(value)); }

    this.myItems = new ObservableArray<DataItem>(this.arrayItems);
  }

  onSubmit(args) {
    const searchBar = <SearchBar>args.object;
    const searchValue = searchBar.text.toLowerCase();

    this.myItems = new ObservableArray<DataItem>();
    if (searchValue !== "") {
      // for (let i = 0; i < this.arrayItems.length; i++) {
      //     if (this.arrayItems[i].name.toLowerCase().indexOf(searchValue) !== -1) {
      //         this.myItems.push(this.arrayItems[i]);
      //     }
      for (const item of this.arrayItems) {
        if (item.name.toLowerCase().indexOf(searchValue) !== -1) {
          this.myItems.push(item);
        }
      }
    }
  }

  onClear(args) {
    const searchBar = <SearchBar>args.object;
    searchBar.text = "";
    searchBar.hint = "Enter a car model and press search";

    this.myItems = new ObservableArray<DataItem>();
    this.arrayItems.forEach((item) => {
      this.myItems.push(item);
    });
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
