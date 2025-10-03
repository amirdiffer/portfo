import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import ExperienceItem from './models/experience.model';
import { Timeline } from 'primeng/timeline';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  imports: [Card, Timeline],
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      from: 'March 2018',
      position: 'Full Stack Developer',
      company: 'Fara Feedback',
    },
    {
      from: 'January 2021',
      position: 'Senior Frontend Developer',
      company: 'Raadwin',
    },
    {
      from: 'August 2021',
      position: 'Full Stack Developer',
      company: 'Freelancer',
    },
    {
      from: 'October 2022',
      position: 'Senior Frontend Developer',
      company: 'Husha ERP System',
    },
    {
      from: 'April 2024 - Present',
      position: 'Senior Frontend Developer',
      company: 'Next Top Tech (TopChange)',
    },
  ];
}
