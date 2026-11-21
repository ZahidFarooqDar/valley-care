import { Injectable } from '@angular/core';
import { IMG_BASE, IMG_VERSION } from '../data/clinic.data';

@Injectable({ providedIn: 'root' })
export class ImageLoaderService {
  /** Turns a file name into a full address (adds the images folder and a cache-busting version). */
  resolve(file: string): string {
    if (!file) return '';
    if (file.startsWith('http')) return file;
    const path = file.startsWith('/') ? file : IMG_BASE + file;
    return `${path}?v=${IMG_VERSION}`;
  }

  /**
   * Tries each file in order (and other extensions for the first file) and resolves with the
   * address of the first image that loads, or null. Failed addresses are logged in the console (F12).
   */
  loadFirst(files: string | string[]): Promise<string | null> {
    const list = ([] as string[]).concat(files).filter(Boolean);
    const names: string[] = [];
    const add = (n: string) => { if (!names.includes(n)) names.push(n); };

    list.forEach((file, index) => {
      const hasExtension = /\.[^.]+$/.test(file);
      if (hasExtension) add(file);
      if (index === 0) {
        const base = file.replace(/\.[^.]+$/, '');
        ['png', 'jpg', 'jpeg', 'webp'].forEach(ext => add(`${base}.${ext}`));
      }
    });

    return new Promise(resolve => {
      const next = (i: number): void => {
        if (i >= names.length) {
          console.error('No image could be loaded for:', list.join(', '));
          resolve(null);
          return;
        }
        const src = this.resolve(names[i]);
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => { console.warn('Image not found:', src); next(i + 1); };
        img.src = src;
      };
      next(0);
    });
  }
}
