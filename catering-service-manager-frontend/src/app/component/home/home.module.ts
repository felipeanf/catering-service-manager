import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuComponent } from 'src/app/core/menu/menu.component';
import { Menu2Component } from './menu2/menu2.component';



@NgModule({
  declarations: [HomeComponent, Menu2Component],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
