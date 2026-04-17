import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skill-section',
  imports: [],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.scss',
})
export class SkillSectionComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Skills | Himanshu Kushwaha - Java Backend Developer');
    this.meta.updateTag({ name: 'description', content: 'My technical skills and expertise. Java, Spring Boot, Kafka, Redis, Microservices, Distributed Systems, and more.' });
    this.meta.updateTag({ property: 'og:title', content: 'Skills | Himanshu Kushwaha - Java Backend Developer' });
    this.meta.updateTag({ property: 'og:description', content: 'My technical skills and expertise. Java, Spring Boot, Kafka, Redis, Microservices, Distributed Systems, and more.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.himanshuk.me/skills' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Skills | Himanshu Kushwaha - Java Backend Developer' });
    this.meta.updateTag({ name: 'twitter:description', content: 'My technical skills and expertise. Java, Spring Boot, Kafka, Redis, Microservices, Distributed Systems, and more.' });
  }
}
