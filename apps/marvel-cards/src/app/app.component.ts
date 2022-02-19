import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'angular-marvel-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  title = 'marvel-cards'
  teste = 'abcde'
  lista = [ 1, 2, 3, 4 ]

  obj = {
    teste: true,
    'outra-pro': false,
    outraProp: true,
    nana: false,
  }

  anotherObj = {
    a: true,
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.')
  }
  outra(): void {
    this.testeFn(1, 2)
  }
  testeFn(someParameter : number, outra:number):void {
    console.log(someParameter, outra)
    this.lista.map(item => {
      console.log(item)
    })

    if (someParameter == 3) {
      console.log(false)
    } else{
      console.log(true)
    }

  }
}
