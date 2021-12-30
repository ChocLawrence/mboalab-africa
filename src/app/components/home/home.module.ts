import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgwWowModule } from 'ngx-wow';
import { TranslateModule } from "@ngx-translate/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-loading";
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, MainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    NgbModule,
    FormsModule
  ]
})
export class HomeModule { }
