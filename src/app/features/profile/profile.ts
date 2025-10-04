import { Component, inject } from '@angular/core';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { NgOptimizedImage } from '@angular/common';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
  imports: [Card, Button, NgOptimizedImage],
  providers: [ProfileService],
})
export class Profile {
  service = inject(ProfileService);

  downloadResume() {
    this.service.downloadFile();
  }
}
