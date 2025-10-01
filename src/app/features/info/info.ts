import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import Bio from './models/bio.model';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-info',
  templateUrl: './info.html',
  styleUrl: './info.scss',
  imports: [Card],
})
export class Info {
  bio: Bio[] = [
    {
      icon: PrimeIcons.MAP_MARKER,
      title: 'Based in',
      value: 'Iran'
    },
    {
      icon: PrimeIcons.GITHUB,
      title: 'Github',
      value: 'amirdiffer'
    },
    {
      icon: PrimeIcons.LINKEDIN,
      title: 'Linkedin',
      value: 'differofeveryone'
    },
    {
      icon: PrimeIcons.CIRCLE_FILL,
      title: 'Medium',
      value: 'differofeveryone'
    },
    {
      icon: PrimeIcons.ENVELOPE,
      title: 'Email',
      value: 'differofeveryone@gmail.com'
    },
  ];
}
