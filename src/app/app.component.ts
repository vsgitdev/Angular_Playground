import { MasterComponent } from './components/master/master.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RolesComponent, MasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Playground';
}
