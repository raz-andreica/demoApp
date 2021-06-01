import {NgModule} from '@angular/core'
import {Routes} from '@angular/router'
import {NativeScriptRouterModule} from '@nativescript/angular'

import {BrowseComponent} from './browse.component'
import {CarDetailComponent} from "../car-detail/car-detail.component";
import {CarDetailEditComponent} from "../car-detail-edit/car-detail-edit.component";

const routes: Routes = [
  {path: '', component: BrowseComponent},
  {path: 'car-detail/:id', component: CarDetailComponent},
  {path: 'car-detail-edit/:id', component: CarDetailEditComponent},
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class BrowseRoutingModule {
}
