import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core';

/** Fades an element in (adds the "in" class) when it scrolls into view. */
@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements AfterViewInit, OnDestroy {
  private el = inject<ElementRef<HTMLElement>>(ElementRef);
  private static observer?: IntersectionObserver;

  private static get(): IntersectionObserver {
    if (!RevealDirective.observer) {
      RevealDirective.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            RevealDirective.observer?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
    }
    return RevealDirective.observer;
  }

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.el.nativeElement.classList.add('in');
      return;
    }
    RevealDirective.get().observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    RevealDirective.observer?.unobserve(this.el.nativeElement);
  }
}
