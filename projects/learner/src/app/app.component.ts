import { Component } from '@angular/core';
import { SpokeSharedService } from 'spoke-shared';

declare const VERSION: string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learner';
  version = 'Version: ' + VERSION;

  constructor(private shared: SpokeSharedService) { }

  getStuff = () => this.shared.getTheStuff();
}
