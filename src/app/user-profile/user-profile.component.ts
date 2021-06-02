import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import {alert} from "@nativescript/core";

@Component({
  selector: 'User',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  // onOptionsButtonTap() {
  //   let options = {
  //     title: "Placeholder",
  //     message: "This will take you somewhere eventually.",
  //     okButtonText: "OK"
  //   };
  //
  //   alert(options).then(() => {
  //     // console.log("Done!");
  //   });
  // }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
