import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { NgbNavModule,NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem, Gallery, ImageItem, ImageSize, ThumbnailsPosition, GalleryModule } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { AdminGroup } from '../../../models/AdminGroup';
import { ThemeCustomizerService } from '../../../service/theme-customizer.service';
import { AuthService } from '../../../service/auth.service';
import { AdminGroupService } from '../../../service/AdminGroup.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule,CommonModule,SharedModule,NgbNavModule,NgbDropdownModule,GalleryModule,LightboxModule, OverlayscrollbarsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {
  currentUser: any;
  groups: AdminGroup[] = []; // Initialize groups as an empty array
  currentTab: string = 'home'; // Default to 'home' or any starting tab

  isToggled = false;
	
  constructor(
      public themeService: ThemeCustomizerService,
      private authService :AuthService,
      private adminGroupService : AdminGroupService
  ) {
      this.themeService.isToggled$.subscribe(isToggled => {
          this.isToggled = isToggled;
      });
  }

  toggleTheme() {
      this.themeService.toggleTheme();
  }
  

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
  }

  logout() {
    this.authService.logout();
  }
    
  fetchAdminGroups() {
    this.adminGroupService.getAdminGroups().subscribe(
      (data: AdminGroup[]) => {
        this.groups = data; // Assign the fetched data to the groups array
      },
      (error) => {
        console.error('Failed to fetch groups', error); // Log the error for debugging
      }
    );
  }
  changeTab(tabName: string) {
    const content = document.getElementById('content');
    if (!content) return; // Null check

    const buttons = document.querySelectorAll('.nav-button');
    buttons.forEach(button => button.classList.remove('active'));

    const activeButton = Array.from(buttons).find(button => button.textContent?.trim() === tabName.charAt(0).toUpperCase() + tabName.slice(1));
    if (activeButton) {
      activeButton.classList.add('active');
    }

    switch(tabName) {
      case 'home':
        content.innerHTML = 'Welcome to the Home Page!';
        break;
      case 'about':
        content.innerHTML = 'Learn more About us.';
        break;
      case 'services':
        content.innerHTML = 'Discover our Services.';
        break;
      case 'contact':
        content.innerHTML = 'Get in touch on our Contact page.';
        break;
      case 'login':
        content.innerHTML = 'Please Login to continue.';
        break;
      default:
        content.innerHTML = 'Welcome!';
    }
  }
  changeTab2(tabName: string) {
    if (tabName === 'courses') {
      this.fetchAdminGroups(); // Call the fetch function when the "Courses" tab is clicked
    }
    this.currentTab = tabName; // Set the current tab for display
  }
}
