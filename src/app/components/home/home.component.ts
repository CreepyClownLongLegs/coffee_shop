import { Component, OnInit, OnDestroy } from '@angular/core';
import { GalleryLinksComponent } from '../gallery-links/gallery-links.component';
import { ScrollButtonComponent } from '../scroll-button/scroll-button.component';
import { RouterLink } from "@angular/router";
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleryLinksComponent, ScrollButtonComponent, RouterLink, FadeInDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  title = "Tony's Cafe";
  displayedQuote = '';

  private readonly fullQuote = '"Kaffee ist der Stoff, aus dem Träume gemacht sind."';
  private charIndex = 0;
  private isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.timer = setTimeout(() => this.tick(), 800);
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  private tick(): void {
    if (!this.isDeleting) {
      this.charIndex++;
      this.displayedQuote = this.fullQuote.slice(0, this.charIndex);
      if (this.charIndex === this.fullQuote.length) {
        this.isDeleting = true;
        this.timer = setTimeout(() => this.tick(), 2200);
        return;
      }
    } else {
      this.charIndex--;
      this.displayedQuote = this.fullQuote.slice(0, this.charIndex);
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.timer = setTimeout(() => this.tick(), 600);
        return;
      }
    }
    this.timer = setTimeout(() => this.tick(), this.isDeleting ? 30 : 60);
  }
}
