import { Component } from '@angular/core';
import { SharedModule } from '../../shared/common/sharedmodule';
import { ShowcodeCardComponent } from '../../shared/common/includes/showcode-card/showcode-card.component';

@Component({
  selector: 'app-directmessages',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './directmessages.component.html',
  styleUrl: './directmessages.component.scss'
})
export class DirectmessagesComponent {

}
