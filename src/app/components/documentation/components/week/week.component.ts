import { Component, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import documentationData from '../../../../data/overall-documentation';
import { MatRippleModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from '../../../../modules/module';
import { BubbleComponent } from '../../../../shared-components/bubble/bubble.component';

@Component({
  selector: 'app-week',
  imports: [MatRippleModule, RouterLink, CommonModule, MaterialModules, BubbleComponent],
  templateUrl: './week.component.html',
  styleUrl: './week.component.scss'
})
export class WeekComponent {
  data: any = []
  weekId: number = 0 

  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = null

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    this.route.paramMap.subscribe(params => {
      id = params.get('id')!;

      if(!id) {
        console.log('wala nga eh')
        return
      }
  
      this.weekId = parseInt(id)
      this.getData(parseInt(id))
    });
  }

  private getData (id: number) {
    let data = documentationData[id - 1] || null

    if(!data) {
      console.log('wala nga ihhh')
      return
    }
    
    this.data = data
    console.log(this.data)
  }
}
