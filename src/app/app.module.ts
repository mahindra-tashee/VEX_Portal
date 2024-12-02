import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MainComponent } from './main/main.component';
import { RouterLinkActiveExactDirective } from './main/appRouterLinkActiveExact.directive';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { TimetableComponent } from './pages/timetable/timetable.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GoogleMapsModule } from "@angular/google-maps";
import { AdminMastersComponent } from './admin-masters/admin-masters.component';
import { ResourceMastersComponent } from './resource-masters/resource-masters.component';
import { PlanMastersComponent } from './plan-masters/plan-masters.component';
import { IncidentMastersComponent } from './incident-masters/incident-masters.component';
import { NotificationSettingComponent } from './notification-setting/notification-setting.component';
import { DepartmentComponent } from './department/department.component';
import { UserManagementComponent } from './user-management/user-management.component';
// Import FormsModule
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    MainComponent,
    RouterLinkActiveExactDirective,
    ProfileComponent,
    TimetableComponent,
    AdminMastersComponent,
    ResourceMastersComponent,
    PlanMastersComponent,
    IncidentMastersComponent,
    NotificationSettingComponent,
    DepartmentComponent,
    UserManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    NgApexchartsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
