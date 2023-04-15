import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = ""
  contentTitle:string = ""
  contentParagraph:string =""
  private id:string|null = '0'
  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('Id')
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string |null):void{
    const result = dataFake.filter(
          article => article.id == id
          )[0]

    this.contentTitle = result.title
    this.contentParagraph = result.paragraph
    this.photoCover = result.photoCover
  }

}
