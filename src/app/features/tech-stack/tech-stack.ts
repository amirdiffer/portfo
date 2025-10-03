import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Chip } from 'primeng/chip';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
  imports: [Card, Chip],
})
export class TechStack {}
