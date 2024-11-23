import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    MobileMenuComponent,
    FooterComponent,
    SidebarComponent,
    SubMenuComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    RouterModule

  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    FooterComponent,
    SidebarComponent,
    SubMenuComponent,
  ]
})
export class SharedModule {
  constructor(){
    console.log('SharedModule loaded');
  }
}
