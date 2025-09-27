import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-theme-changer',
  templateUrl: './theme-changer.html',
  styleUrl: './theme-changer.scss',
  imports: [Card, Select],
})
export class ThemeChanger {}
