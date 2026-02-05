import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { concat } from 'rxjs';
import { Contact } from './sections/contact/contact';
import { Hero } from './sections/hero/hero';
import { Mindset } from './sections/mindset/mindset';
import { Personal } from './sections/personal/personal';
import { Projects } from './sections/projects/projects';
import { Header } from "./sections/header/header";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Contact,
    Hero,
    Mindset,
    Personal,
    Projects,
    Header
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio.Marcos.Corasaniti');
}
