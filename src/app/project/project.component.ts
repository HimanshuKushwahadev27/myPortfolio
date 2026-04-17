import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Projects | Himanshu Kushwaha - Java Backend Developer');
    this.meta.updateTag({ name: 'description', content: 'My open-source projects and contributions. infra-core on Maven Central. Building production-grade backend systems and infrastructure libraries.' });
    this.meta.updateTag({ property: 'og:title', content: 'Projects | Himanshu Kushwaha - Java Backend Developer' });
    this.meta.updateTag({ property: 'og:description', content: 'My open-source projects and contributions. infra-core on Maven Central. Building production-grade backend systems and infrastructure libraries.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.himanshuk.me/project' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Projects | Himanshu Kushwaha - Java Backend Developer' });
    this.meta.updateTag({ name: 'twitter:description', content: 'My open-source projects and contributions. infra-core on Maven Central. Building production-grade backend systems and infrastructure libraries.' });
  }

  mavenDependency = `<dependency>
  <groupId>io.github.himanshukushwahadev27</groupId>
  <artifactId>infra-core</artifactId>
  <version>1.0.0</version>
</dependency>

<dependency>
  <groupId>io.github.himanshukushwahadev27</groupId>
  <artifactId>infra-spring-boot</artifactId>
  <version>1.0.0</version>
</dependency>`;
}
