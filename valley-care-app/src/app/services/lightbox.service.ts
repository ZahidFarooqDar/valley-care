import { Injectable, signal } from '@angular/core';

export interface LightboxState { open: boolean; src: string; name: string; wide: boolean; }

@Injectable({ providedIn: 'root' })
export class LightboxService {
  state = signal<LightboxState>({ open: false, src: '', name: '', wide: false });

  /** wide = true gives a larger window (used for news clippings). */
  open(src: string, name: string, wide = false): void {
    this.state.set({ open: true, src, name, wide });
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.state.update(s => ({ ...s, open: false }));
    document.body.style.overflow = '';
  }
}