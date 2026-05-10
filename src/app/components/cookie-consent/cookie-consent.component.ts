import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './cookie-consent.component.html',
  styleUrl: './cookie-consent.component.css',
})
export class CookieConsentComponent implements OnInit {
  visible = false;

  ngOnInit(): void {
    const choice = localStorage.getItem('cookieConsent');
    if (!choice) this.visible = true;
  }

  accept(): void {
    localStorage.setItem('cookieConsent', 'accepted');
    this.visible = false;
  }

  reject(): void {
    localStorage.setItem('cookieConsent', 'rejected');
    this.visible = false;
  }
}
