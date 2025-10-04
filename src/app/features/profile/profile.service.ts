import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {
  private readonly _httpClient = inject(HttpClient);

  downloadFile() {
    this._httpClient
      .get('pdf/SayedHossainHossaini-Resume.pdf', {
        responseType: 'blob',
      })
      .subscribe((blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'SayedHossainHossaini-Resume.pdf';
        link.click();
        window.URL.revokeObjectURL(url);
      });
  }
}
