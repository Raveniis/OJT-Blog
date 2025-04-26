import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import documentationData from '../../../../data/overall-documentation';

@Component({
  selector: 'app-week',
  imports: [],
  templateUrl: './week.component.html',
  styleUrl: './week.component.scss'
})
export class WeekComponent {
  data: any = []
  weekId: string | null = null

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = null

    this.route.paramMap.subscribe(params => {
      id = params.get('id')!;

      if(!id) {
        console.log('wala nga eh')
        return
      }
  
      this.weekId = id
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
