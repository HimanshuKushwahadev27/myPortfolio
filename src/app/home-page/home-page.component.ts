import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen, faCubesStacked } from '@fortawesome/free-solid-svg-icons';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  imports: [FontAwesomeModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Himanshu Kushwaha');
    this.meta.updateTag({ name: 'description', content: 'Java Backend Developer & CS student (2027). Spring Boot, Kafka, Microservices. Author of infra-core on Maven Central. Building production-grade backend systems.' });
    this.meta.updateTag({ property: 'og:title', content: 'Himanshu Kushwaha' });
    this.meta.updateTag({ property: 'og:description', content: 'CS student building production-grade backend systems — fintech microservices, distributed infrastructure, and open-source libraries published on Maven Central.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.himanshuk.me' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Himanshu Kushwaha' });
    this.meta.updateTag({ name: 'twitter:description', content: 'CS student building production-grade backend systems — fintech microservices, distributed infrastructure, and open-source libraries published on Maven Central.' });
  }

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faGeeksforgeeks = faBookOpen;
  faMaven = faCubesStacked;
}
