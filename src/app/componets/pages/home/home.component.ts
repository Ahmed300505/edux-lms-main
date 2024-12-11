import { RouterModule } from '@angular/router';
import { Component,ViewChild } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import Choices, {Options } from 'choices.js';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FormGroup,FormsModule } from '@angular/forms';
import { FilePondOptions } from 'filepond';
import { FilePondModule } from 'ngx-filepond';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { SharedModule } from '../../../shared/common/sharedmodule';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, FlatpickrModule, NgSelectModule, FilePondModule, FormsModule, AngularEditorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {

}
