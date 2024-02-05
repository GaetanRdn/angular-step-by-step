import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  template: `<h1>{{ title }}</h1>`,
})
export class TitleComponent {
  title = 'Hello World!'
}
