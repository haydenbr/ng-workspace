import { Component } from '@angular/core';

declare const VERSION: string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learner';
  version = 'Version: ';

  message = 'Bob is cool! LooooooL'
}
