import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  enteredSymbol!: FormGroup;




  get_LTP_from_Symbol() {

    console.log(this.enteredSymbol);
    



  }
  ngOnInit(): void {
    this.enteredSymbol = new FormGroup(
      {
        'symbol': new FormControl(null)
      }
    )

  }



}
