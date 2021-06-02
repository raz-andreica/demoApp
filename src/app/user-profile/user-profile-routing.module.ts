import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { UserProfileComponent } from './user-profile.component'

const routes: Routes = [{ path: '', component: UserProfileComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class UserProfileComponentRouting {}
