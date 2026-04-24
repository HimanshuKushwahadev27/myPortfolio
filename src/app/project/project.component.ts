import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AstracoreComponent } from '../astracore/astracore.component';
import { BiddingComponent } from '../bidding/bidding.component';
import { DependencyComponent } from '../dependency/dependency.component';

@Component({
  selector: 'app-project',
  imports: [AstracoreComponent, BiddingComponent, DependencyComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    this.meta.updateTag({ property: 'og:url', content: 'https://www.himanshuk.me/projects' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Projects | Himanshu Kushwaha - Java Backend Developer' });
    this.meta.updateTag({ name: 'twitter:description', content: 'My open-source projects and contributions. infra-core on Maven Central. Building production-grade backend systems and infrastructure libraries.' });
  }

}
