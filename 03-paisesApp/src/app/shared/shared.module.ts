import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [FooterComponent, MenuComponent, SidebarComponent],
  exports: [SidebarComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
