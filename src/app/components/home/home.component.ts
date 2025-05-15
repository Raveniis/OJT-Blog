import { Component } from '@angular/core';
import { MaterialModules } from '../../modules/module';
import { HeaderComponent } from '../../shared-components/header/header.component';
import { FooterComponent } from '../../shared-components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { BubbleComponent } from '../../shared-components/bubble/bubble.component';
import documentationData from '../../data/overall-documentation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MaterialModules, HeaderComponent, FooterComponent, CommonModule, BubbleComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  skills = [
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
      alt: 'HTML',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
      alt: 'CSS / SCSS',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      alt: 'JavaScript',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      alt: 'TypeScript',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      alt: 'PHP',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      alt: 'MySQL',
    },
    { src: './icons/Laravel.png', alt: 'Laravel Framework' },

    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg',
      alt: 'Angular Framework',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      alt: 'Vue',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      alt: 'React JS',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      alt: 'React Native',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      alt: 'Express',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      alt: 'MongoDB',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      alt: 'Git and GitHub',
    },
  ];

  documentation = documentationData
}
