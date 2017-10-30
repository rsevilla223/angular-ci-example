import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router/router';

@Component({
  selector: 'app-site-header',
  templateUrl: 'site-header.html',
  styleUrls: ['site-header-styles.css']
})
export class SiteHeaderComponent {
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  myFunction() {
     var x = document.getElementById("myTopnav");
     if (x.className === "topnav") {
         x.className += " responsive";
     } else {
         x.className = "topnav";
     }
  }

}
