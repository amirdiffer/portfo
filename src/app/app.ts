import { Component } from '@angular/core';
import { ThemeChanger } from './features/theme-changer/theme-changer';
import { Profile } from './features/profile/profile';
import { Info } from './features/info/info';
import { TechStack } from './features/tech-stack/tech-stack';
import { Experience } from './features/experience/experience';
import { Projects } from './features/projects/projects';
import { Publications } from './features/publications/publications';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    ThemeChanger,
    Profile,
    Info,
    TechStack,
    Experience,
    Projects,
    Publications,
  ],
})
export class App {}
