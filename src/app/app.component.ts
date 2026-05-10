import { Component } from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {ViewportScroller} from "@angular/common";
import {MenuComponent} from "./components/menu/menu.component";
import {CookieConsentComponent} from "./components/cookie-consent/cookie-consent.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterModule, RouterOutlet, MenuComponent, CookieConsentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tony\'s Cafe';
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0,0]); // Scrollt zum Anfang der Seite
  }
}
