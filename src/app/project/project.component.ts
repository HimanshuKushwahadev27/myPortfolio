import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {

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
