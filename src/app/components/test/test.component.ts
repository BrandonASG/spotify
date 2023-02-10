import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/core/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponents implements OnInit{

  public employees: Array<any>= [];
  public fumarola: String = 'Fumarola';

  constructor (
    private _test: TestService

  ){ }

  ngOnInit(): void {
    const url = this._test.url
    console.log('Esta es mi URL:'+ url )

    this._test.getemployees().subscribe(
      res => {
        console.log(res);
        this.employees = res.data;

      }
    )
  }

}
