import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  title?: string;
  dataFilterTags?: string;
  dataI18n?: string;
  children?: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'fal fa-globe',
      route: '/dashboard',
      title: 'Dashboard Project',
      dataFilterTags: 'dashboard page',
      dataI18n: 'nav.dashboardpage' // Dữ liệu cho trường dataI18n
    },
    {
      label: 'Product',
      icon: 'fal fa-cube',
      route: '/products',
      title: 'Product Project',
      dataFilterTags: 'product page',
      dataI18n: 'nav.productpage' // Dữ liệu cho trường dataI18n
    },
    {
      label: 'Account',
      icon: 'fal fa-user',
      route: '/account',
      title: 'Account Project',
      dataFilterTags: 'account page',
      dataI18n: 'nav.accountpage', // Dữ liệu cho trường dataI18n
      children: [
        {
          label: 'Profile',
          icon: 'fal fa-id-card',
          route: '/account/profile',
          title: 'Profile Page',
          dataFilterTags: 'profile page',
          dataI18n: 'nav.profilepage' // Dữ liệu cho trường dataI18n
        },
        {
          label: 'Settings',
          icon: 'fal fa-cog',
          route: '/account/settings',
          title: 'Settings Page',
          dataFilterTags: 'settings page',
          dataI18n: 'nav.settingspage', // Dữ liệu cho trường dataI18n
          children: [
            {
              label: 'General',
              icon: 'fal fa-cog',
              route: '/account/settings/general',
              title: 'General Settings',
              dataFilterTags: 'general settings page',
              dataI18n: 'nav.generalsettings' // Dữ liệu cho trường dataI18n
            },
            {
              label: 'Security',
              icon: 'fal fa-shield',
              route: '/account/settings/security',
              title: 'Security Settings',
              dataFilterTags: 'security settings page',
              dataI18n: 'nav.securitysettings' // Dữ liệu cho trường dataI18n
            }
          ]
        }
      ]
    }
  ];
}
