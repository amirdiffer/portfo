import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
  imports: [Card, Button, NgOptimizedImage],
})
export class Profile {}
