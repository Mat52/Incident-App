import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-about-component',
  standalone: true,
  imports: [],
  templateUrl: './about-component.component.html',
  styleUrl: './about-component.component.scss'
})
export class AboutComponentComponent {
  constructor(private router: Router) { }

  onNavigate() {
    this.router.navigate(['/addRequest']); // Navigate to the addRequest route
  }
}
