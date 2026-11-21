import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  text = signal('');
  visible = signal(false);
  private timer?: ReturnType<typeof setTimeout>;

  show(message: string): void {
    this.text.set(message);
    this.visible.set(true);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.visible.set(false), 4600);
  }
}
