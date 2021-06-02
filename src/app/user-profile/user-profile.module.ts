import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { UserProfileComponentRouting } from './user-profile-routing.module'
import { UserProfileComponent } from './user-profile.component'

@NgModule({
  imports: [NativeScriptCommonModule, UserProfileComponentRouting],
  declarations: [UserProfileComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class UserProfileModule {}
