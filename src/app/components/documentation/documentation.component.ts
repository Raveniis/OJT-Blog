import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModules } from '../../modules/module';

@Component({
  selector: 'app-documentation',
  imports: [RouterOutlet, MaterialModules, RouterLink],
  templateUrl: './documentation.component.html',
  styleUrl: './documentation.component.scss'
})
export class DocumentationComponent {
}
