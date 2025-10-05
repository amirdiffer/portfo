import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import Publication from './models/publication.model';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.html',
  styleUrl: './publications.scss',
  imports: [Card, ButtonDirective],
})
export class Publications {
  items: Publication[] = [
    {
      name: 'Angular Professional Architecture for Serious Programmers: A Practical Look at the Facade Pattern',
      thumbnail:
        'https://miro.medium.com/v2/resize:fit:700/1*vZMJYGBUE41ARqqWl97inw.png',
      createdAt: 'May 01 2025',
      timeToRead: '4 min',
      mediumLink:
        'https://medium.com/@differofeveryone/angular-professional-architecture-for-serious-programmers-a-practical-look-at-the-facade-pattern-1a14b8993db3',
    },
    {
      name: 'Angular v20: Stable Signals, Zoneless Mode, and GenAI — The Future of Angular Starts Now',
      thumbnail: 'https://miro.medium.com/v2/resize:fit:700/0*5OUJINrQ5NTTaRfZ',
      createdAt: 'Jun 03 2025',
      timeToRead: '4 min',
      mediumLink:
        'https://medium.com/@differofeveryone/angular-v20-stable-signals-zoneless-mode-and-genai-the-future-of-angular-starts-now-bd41295fb46b',
    },
    {
      name: 'Why Frontend Developers Need to Think Like Architects in 2025',
      thumbnail:
        'https://miro.medium.com/v2/resize:fit:700/1*8BiI_yWjVm2RdQhGxmuI4Q.png',
      createdAt: 'Jun 12 2025',
      timeToRead: '3 min',
      mediumLink:
        'https://medium.com/@differofeveryone/why-frontend-developers-need-to-think-like-architects-in-2025-f28f4cc3dddb',
    },
    {
      name: 'Beyond OnPush: Advanced Angular Performance Techniques for 2025',
      thumbnail: 'https://miro.medium.com/v2/resize:fit:700/0*xIGOlm-B_2eYHb5S',
      createdAt: 'May 28 2025',
      timeToRead: '8 min',
      mediumLink:
        'https://medium.com/@differofeveryone/beyond-onpush-advanced-angular-performance-techniques-for-2025-28fdb6b150ea',
    },
  ];
}
