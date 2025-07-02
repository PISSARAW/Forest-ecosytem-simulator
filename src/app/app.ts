import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
   template: `
    <main>
      <header class="brand-name">
        <h1>{{title}}</h1>
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Forest Simulation Platform';
}
