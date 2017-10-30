import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-newscard-component',
  templateUrl: 'newscard-component.html',
  styleUrls: ['newscard-component.css']
})
export class NewscardComponentComponent {
  name = "Ryan Sevilla";
  today: number = Date.now();




}
