import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faBook, faBox } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faDocker } from '@fortawesome/free-brands-svg-icons';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  imports: [MatButton, MatTooltip, RouterLink, FontAwesomeModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Himanshu Kushwaha | Java Backend Developer');
    this.meta.updateTag({ name: 'description', content: 'Java Backend Developer & CS student (2027). Spring Boot, Kafka, Microservices. Author of infra-core on Maven Central. Building production-grade backend systems.' });
    this.meta.updateTag({ property: 'og:title', content: 'Himanshu Kushwaha | Java Backend Developer' });
    this.meta.updateTag({ property: 'og:description', content: 'CS student building production-grade backend systems — fintech microservices, distributed infrastructure, and open-source libraries published on Maven Central.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.himanshuk.me' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Himanshu Kushwaha | Java Backend Developer' });
    this.meta.updateTag({ name: 'twitter:description', content: 'CS student building production-grade backend systems — fintech microservices, distributed infrastructure, and open-source libraries published on Maven Central.' });
  }

  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faDocker = faDocker;
  faBook = faBook;
  faBox = faBox;
}
