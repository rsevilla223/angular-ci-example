import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-green',
  template: `
    <div class="wrapper"></div>
  `,
  styles: ['div.wrapper { width: 500px; height: 500px; background-color: green; }']
})
export class GreenComponent {}
