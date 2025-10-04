import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import Project, { TechnologyColor } from './models/project.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  imports: [Card, NgClass],
})
export class Projects {
  items: Project[] = [
    {
      name: 'Farafeedback',
      description:
        'Development of the Farafeedback survey system.\n' +
        'It is a survey system that asks people to share their experiences\n' +
        'using hotels, offices and other social services.\n' +
        'In this project, I used Angular for the frontend and Laravel for the\n' +
        'backend.',
      technologies: [
        {
          title: 'TypeScript',
          iconColor: TechnologyColor.TypeScript,
        },
        {
          title: 'PHP',
          iconColor: TechnologyColor.PHP,
        },
      ],
    },
    {
      name: 'Insurance Management System',
      description:
        'Development of the Dubai Police Insurance Management System.\n' +
        'This system is built to manage insurance for Dubai police fleets.\n' +
        'Also in this project, we used Angular framework for the frontend\n' +
        'and Java spring boot for the backend',
      technologies: [
        {
          title: 'TypeScript',
          iconColor: TechnologyColor.TypeScript,
        },
      ],
    },
    {
      name: 'Fleet Management System',
      description:
        'Development of the Dubai Police Fleet Management System.\n' +
        'This system is built to manage Dubai police fleets (including police\n' +
        'cars, motorbikes, boats, ...).\n' +
        'For the frontend, we used Angular framework and Java spring boot\n' +
        'for the backend.',
      technologies: [
        {
          title: 'TypeScript',
          iconColor: TechnologyColor.TypeScript,
        },
      ],
    },
    {
      name: 'Husha ERP System',
      description:
        'Development and maintenance of Husha ERP system.\n' +
        'The system is built to provide resource planning stuff for\n' +
        'enterprises.\n' +
        'In frontend we used Angular version 12 and then 14\n' +
        'And in the backend it is spring boot.',
      technologies: [
        {
          title: 'TypeScript',
          iconColor: TechnologyColor.TypeScript,
        },
      ],
    },
    {
      name: 'Next Top Tech (Top Change)',
      description:
        'Development and maintenance of Top Change (TC) the wallet for\n' +
        'fiat and crypto.\n' +
        'The platform is built to provide means to exchange and transfer fiat\n' +
        'money and crypto easier around the world.\n' +
        'In frontend we used Angular version 18 and then upgraded 19.',
      technologies: [
        {
          title: 'TypeScript',
          iconColor: TechnologyColor.TypeScript,
        },
      ],
    },
  ];
  protected readonly TechnologyColor = TechnologyColor;
}
