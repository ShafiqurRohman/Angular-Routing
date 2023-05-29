import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(
    private router : Router
  ) {
    this.subscribeToRouterEvents();
   }

  private subscribeToRouterEvents() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
    });
  }

  private scrollToTop() {
    const options: ScrollToOptions = { top: 0 };
    window.scrollTo(options);
  }
}
