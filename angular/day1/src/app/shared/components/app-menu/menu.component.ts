import { Component, Input } from '@angular/core';

interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  title?: string;
  dataFilterTags?: string;
  dataI18n?: string; // Thêm trường dataI18n
  children?: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menuItems: MenuItem[] = [];

  toggleSubMenu(item: MenuItem) {
    item.expanded = !item.expanded;
  }
}
