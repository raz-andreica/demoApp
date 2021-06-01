import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core'
import {NativeScriptCommonModule, NativeScriptFormsModule} from '@nativescript/angular'
import {NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";

import {BrowseRoutingModule} from './browse-routing.module'
import {BrowseComponent} from './browse.component'
import {CarDetailComponent} from "../car-detail/car-detail.component";
import {CarDetailEditComponent} from "../car-detail-edit/car-detail-edit.component";
import {MyListSelectorComponent} from "../car-detail-edit/my-list-selector/my-list-selector.component";
import {MyListSelectorModalViewComponent} from "../car-detail-edit/my-list-selector/my-list-selector-modal-view.component";
import {MyImageAddRemoveComponent} from "../car-detail-edit/my-image-add-remove/my-image-add-remove.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    BrowseRoutingModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule
  ],
  declarations: [
    BrowseComponent,
    CarDetailComponent,
    CarDetailEditComponent,
    MyListSelectorComponent,
    MyListSelectorModalViewComponent,
    MyImageAddRemoveComponent,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BrowseModule {
}
