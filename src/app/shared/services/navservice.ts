import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

import { Router } from '@angular/router';
// Menu
export interface Menu {
  headTitle?: string;
  headTitle2?: string;
  path?: string;
  dirchange?: boolean;
  title?: string;
  icon?: string;
  type?: string;
  badgeValue?: string;
  badgeClass?: string;
  active?: boolean;
  selected?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  Menusub?: boolean;
  target?: boolean;
  menutype?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  // Search Box
  public search = false;

  // Language
  public language = false;

  // Mega Menu
  public megaMenu = false;
  public levelMenu = false;
  public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  public fullScreen = false;
  active: any;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          this.megaMenu = false;
          this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuColapse = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    // Dashboard
    /*{ headTitle: 'MAIN' },
    {
      title: 'Home',
      icon: 'bi-house',
      dirchange: false,
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/dashboard/personal',
      type: 'link',
    },
    //PAGES
    { headTitle: 'News Feed' },
    {
      title: 'News Feed',
      icon: 'bi-file-earmark',
      dirchange: false,
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/pages/blog/blogdetails',
      type: 'link',
    },
    // authentication
    { headTitle: 'My Courses' },
    {
      title: 'My Courses',
      icon: 'bi-key',
      dirchange: false,
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/pages/ecommerce/products',
      type: 'link',
    },
    // ERROR
    { headTitle: 'Study Events' },
    {
      title: 'Study Events',
      icon: 'bi- bi-exclamation-triangle',
      dirchange: false,
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/studyevents',
      type: 'link',
    },
    // APPS
    { headTitle: 'My Groups' },
    {
      title: ' My Groups',
      icon: ' bi-grid side-menu__icon',
      dirchange: false,
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/pages/team',
      type: 'link',
    },
    //NESTED-MENU
    { headTitle: ' Direct Messages' },
    {
      title: ' Direct Messages',
      icon: ' bi-layers side-menu__icon',
      dirchange: false,
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/pages/chat',
      type: 'link',
     
    },
    //UI-ELEMENTS
    { headTitle: ' All Groups' },
    {
      title: ' All Groups',
      icon: 'bi-archive side-menu__icon',
      dirchange: false,
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/allgroups',
      type: 'link',
      
    },
    //UTILITIES
    { headTitle: 'Announcements' },
    {
      title: ' Announcements',
      icon: 'bi-award side-menu__icon',
      dirchange: false,
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/pages/reviews',
      type: 'link',
      
    },
    //FORMS
    { headTitle: ' Notifications' },
    {
      title: ' Notifications',
      icon: 'bi-file-earmark-text side-menu__icon',
      dirchange: false,
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/pages/notifications',
      type: 'link',
    
    },
    //ADVANCED-UI
    { headTitle: 'Payments' },
    {
      title: 'Payments',
      icon: 'bi-snow side-menu__icon',
      dirchange: false,
       active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/pages/empty',
      type: 'link',
    },

    //Widgets
    { headTitle: 'Help' },
    {
      title: 'Help',
      icon: 'bi-gift side-menu__icon"',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/help',
      dirchange: false,
      type: 'link',
    },
    */
    //Widgets
    { headTitle: 'Home' },
    {
      title: 'Home',
      icon: 'bi-list side-menu__icon"',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/dashboard/personal',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Announcements' },
    {
      title: 'Announcements',
      icon: 'bi-megaphone side-menu__icon',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-info',
      badgeValue: '3',
      path: '/announcements',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Enrollment' },
    {
      title: 'Enrollment',
      icon: 'bi-clipboard-data side-menu__icon',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: '',
      path: '/enrollment',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Courses' },
    {
      title: 'Courses',
      icon: 'bi-journal-bookmark side-menu__icon',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: '',
      path: '/course',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Students' },
    {
      title: 'Students',
      icon: 'bi-people side-menu__icon',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: '',
      path: '/students',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Faculty & Staff' },
    {
      title: 'Faculty & Staff',
      icon: 'bi-person-lines-fill side-menu__icon',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: '',
      path: '/faculty-staff',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Reports' },
    {
      title: 'Reports',
      icon: 'bi-bar-chart side-menu__icon',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: '',
      path: '/reports',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Forum Moderation' },
    {
      title: 'Forum Moderation',
      icon: 'bi-chat-dots side-menu__icon',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: '',
      path: '/forum-moderation',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Scheduling' },
    {
      title: 'Scheduling',
      icon: 'bi-calendar-week side-menu__icon',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: '',
      path: '/scheduling',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Financials' },
    {
      title: 'Financials',
      icon: 'bi-wallet2 side-menu__icon',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: '',
      path: '/financials',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Support & Resources' },
    {
      title: 'Support & Resources',
      icon: 'bi-life-preserver side-menu__icon',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: '',
      path: '/support-resources',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Settings' },
    {
      title: 'Settings',
      icon: 'bi-gear side-menu__icon',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: '',
      path: '/settings',
      dirchange: false,
      type: 'link',
    },
     {headTitle: 'Enrollments' },
    {
      title: 'Enrollments',
      icon: 'bi-list side-menu__icon"',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/enrollments',
      dirchange: false,
      type: 'link',
    },

    {headTitle: 'Add Program' },
    {
      title: 'Add Programs',
      icon: 'bi-plus side-menu__icon"',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/programs',
      dirchange: false,
      type: 'link',
    },

    {headTitle: 'Add Batch' },
    {
      title: 'Add Batch',
      icon: 'bi-plus side-menu__icon"',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/batchs',
      dirchange: false,
      type: 'link',
    },  
      {headTitle: 'Add Study-Year' },
    {
      title: 'Add Study-Year',
      icon: 'bi-plus side-menu__icon"',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/study-year',
      dirchange: false,
      type: 'link',
    },

    {headTitle: 'Student-Enroll-Form' },
    {
      title: 'Student-Enroll-Form',
      icon: 'bi-plus side-menu__icon"',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/Student-enrollment',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Add Student' },
    {
      title: 'Add Student',
      icon: 'bi-plus side-menu__icon"',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/add-student',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Courses' },
    {
      title: 'Courses',
      icon: 'bi-plus side-menu__icon"',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/courseslist',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Post' },
    {
      title: 'Post',
      icon: 'bi-plus side-menu__icon"',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/post',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Contact' },
    {
      title: 'Contact',
      icon: 'bi-plus side-menu__icon"',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/contact',
      dirchange: false,
      type: 'link',
    },
    { headTitle: 'Registered Course' },
    {
      title: 'Registered Course',
      icon: 'bi-plus side-menu__icon"',
      active: false,
      selected: false,
      badgeClass: 'badge badge-sm bg-secondary badge-hide',
      badgeValue: 'new',
      path: '/my-registered-courses',
      dirchange: false,
      type: 'link',
    },
    
  ];
  // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}