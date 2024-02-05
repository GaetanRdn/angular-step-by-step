import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-title/>`,
  imports: [TitleComponent]
})
export class AppComponent {
}
