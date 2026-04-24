import { ChangeDetectionStrategy, Component, OnInit, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen, faCubesStacked } from '@fortawesome/free-solid-svg-icons';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProjectPanelComponent, type ProjectKey } from '../project-panel/project-panel.component';

@Component({
  selector: 'app-home-page',
  imports: [FontAwesomeModule, ProjectPanelComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);

  readonly selectedProject = signal<ProjectKey | null>(null);

  private readonly bodyScrollLock = effect((onCleanup) => {
    const body = this.document.body;
    const previousOverflow = body.style.overflow;
    body.style.overflow = this.selectedProject() ? 'hidden' : '';

    onCleanup(() => {
      body.style.overflow = previousOverflow;
    });
  });

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

  openProject(projectKey: ProjectKey) {
    this.selectedProject.set(projectKey);
  }

  closeProject() {
    this.selectedProject.set(null);
  }

  goToProjects() {
    void this.router.navigate(['/projects']);
  }
}
