import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faBook, faBox } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faDocker } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home-page',
  imports: [MatButton, MatTooltip, RouterLink, FontAwesomeModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faDocker = faDocker;
  faBook = faBook;
  faBox = faBox;
}
