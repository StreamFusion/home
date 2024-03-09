import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { HomeComponent } from './components/home/home.component';
import {AboutModule} from "../about/about.module";
import {SharedModule} from "../shared/shared.module";
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    AboutModule,
    SharedModule,
    NgOptimizedImage
  ]
})
export class WelcomeModule { }
