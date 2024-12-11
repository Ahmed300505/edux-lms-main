import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { content } from './shared/routes/content.route';
import { AuthenticationLayoutComponent } from './shared/layouts/authentication-layout/authentication-layout.component';
import { authen } from './shared/routes/auth.route';
import { LandingLayoutComponent } from './shared/layouts/landing-layout/landing-layout.component';
import { custom } from './shared/routes/customer.routes';
import { CustomerLayoutComponent } from './shared/layouts/customer-layout/customer-layout.component';
import { AddStudentComponent } from './componets/pages/add-student/add-student.component';
import { EnrollmentsComponent } from './componets/pages/enrollments/enrollments.component';
import { CoursesComponent } from './componets/pages/courses/courses.component';
import { AddCourseComponent } from './componets/pages/add-course/add-course.component';
import { PostComponent } from './componets/pages/post/post.component';
import { ProfileComponent } from './componets/pages/profile/profile.component';
import { MyRegisteredCoursesComponent } from './componets/pages/my-registered-courses/my-registered-courses.component';
import { AnnouncementsComponent } from './componets/pages/announcements/announcements.component';
import { EnrollmentComponent } from './componets/pages/enrollment/enrollment.component';
import { FacultyStaffComponent } from './componets/pages/faculty-staff/faculty-staff.component';
import { ReportsComponent } from './componets/pages/reports/reports.component';
import { ForumModerationComponent } from './componets/pages/forum-moderation/forum-moderation.component';
import { SchedulingComponent } from './componets/pages/scheduling/scheduling.component';
import { FinancialsComponent } from './componets/pages/financials/financials.component';
import { SupportResourcesComponent } from './componets/pages/support-resources/support-resources.component';
import { SettingsComponent } from './componets/pages/settings/settings.component';
import { DashboardComponent } from './componets/pages/dashboard/dashboard.component';
import { CourselistComponent } from './componets/pages/courselist/courselist.component';
import { StudentsComponent } from './componets/pages/students/students.component';
import { AddProgramComponent } from './componets/pages/add-program/add-program.component';
import { AddBatchComponent } from './componets/pages/add-batch/add-batch.component';
import { AddStudyYearComponent } from './componets/pages/add-study-year/add-study-year.component';
import { AddStudentEnrollmentComponent } from './componets/pages/add-student-enrollment/add-student-enrollment.component';



export const App_Route: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
      {
        path: 'auth/login',
        loadComponent: () =>
          import('../app/authentication/login/login.component').then((m) => m.LoginComponent),
      },
     
  { path: '', component: MainLayoutComponent, children: content },
  { path: '', component: CustomerLayoutComponent, children: custom },
  { path: '', component: AuthenticationLayoutComponent, children: authen },
  { path: '', component: LandingLayoutComponent, children: authen },
  {
    path: 'enrollment',
    component: MainLayoutComponent, // Main layout
    children: [
      { path: '', component: EnrollmentComponent }, // Home page
      // Add more public pages here
    ],
  },
  {
    path: 'add-student',
    component: MainLayoutComponent, // Main layout
    children: [
      { path: '', component: AddStudentComponent }, // Home page
      // Add more public pages here
    ],
  },
  {
    path: 'courseslist',
    component: MainLayoutComponent, // Main layout
    children: [
      { path: '', component: CoursesComponent }, // Home page
      // Add more public pages here
    ],
  },
  {
    path: 'add-course',
    component: MainLayoutComponent, // Main layout
    children: [
      { path: '', component: AddCourseComponent }, // Home page
      // Add more public pages here
    ],
  },
  {
    path: 'post',
    component: MainLayoutComponent, // Main layout
    children: [
      { path: '', component: PostComponent }, // Home page
      // Add more public pages here
    ],
  },
  {
    path: 'contact',
    component: ProfileComponent, // Main layout
   
  }
,
{
  path: 'my-registered-courses',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: MyRegisteredCoursesComponent }, // Home page
    // Add more public pages here
  ],
}
,
{
  path: 'announcements',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: AnnouncementsComponent }, // Home page
    // Add more public pages here
  ],
}
,
{
  path: 'enrollments',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: EnrollmentsComponent }, // Home page
    // Add more public pages here
  ],
}
,
{
  path: 'faculty-staff',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: FacultyStaffComponent }, // Home page
    // Add more public pages here
  ],
}
,
{
  path: 'reports',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: ReportsComponent }, // Home page
    // Add more public pages here
  ],
}
,
{
  path: 'forum-moderation',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: ForumModerationComponent }, // Home page
    // Add more public pages here
  ],
}
,
{
  path: 'scheduling',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: SchedulingComponent }, // Home page
    // Add more public pages here
  ],
},
{
  path: 'programs',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: AddProgramComponent }, // Home page
    // Add more public pages here
  ],
}
,
{
  path: 'batchs',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: AddBatchComponent }, // Home page
    // Add more public pages here
  ],
}
,
{
  path: 'study-year',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: AddStudyYearComponent }, // Home page
    // Add more public pages here
  ],
}
,
{
  path: 'Student-enrollment',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: AddStudentEnrollmentComponent }, // Home page
    // Add more public pages here
  ],
}
,
{
  path: 'financials',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: FinancialsComponent }, // Home page
    // Add more public pages here
  ],
}
,
{
  path: 'support-resources',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: SupportResourcesComponent }, // Home page
    // Add more public pages here
  ],
}
,
{
  path: 'settings',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: SettingsComponent }, // Home page
    // Add more public pages here
  ],
}
,
{
  path: 'dashboard/personal',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: DashboardComponent }, // Home page
    // Add more public pages here
  ],
}
,
{
  path: 'course',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: CourselistComponent }, // Home page
    // Add more public pages here
  ],
}
,
{
  path: 'students',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: StudentsComponent }, // Home page
    // Add more public pages here
  ],
},
{
  path: 'edit-student-form/:id',
  component: MainLayoutComponent, // Main layout
  children: [
    { path: '', component: AddStudentComponent }, // Home page
    // Add more public pages here
  ],
}
];
