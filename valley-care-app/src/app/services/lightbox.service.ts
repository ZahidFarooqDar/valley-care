import { Injectable, signal } from '@angular/core';

export interface LightboxState { open: boolean; src: string; name: string; }

@Injectable({ providedIn: 'root' })
export class LightboxService {
  state = signal<LightboxState>({ open: false, src: '', name: '' });

  open(src: string, name: string): void {
    this.state.set({ open: true, src, name });
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.state.update(s => ({ ...s, open: false }));
    document.body.style.overflow = '';
  }
}
