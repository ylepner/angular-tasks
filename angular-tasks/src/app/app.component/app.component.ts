import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse, Result, User } from '../models';
import { BehaviorSubject, combineLatest, map, startWith } from 'rxjs'

const URL = `https://swapi.dev/api/people/`

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('inputElement')
  input!: ElementRef<HTMLInputElement>

  userName?: string


  @Input()
  test?: string;



  readonly response$ = this.http.get<APIResponse>(URL).pipe(
    map(res => res.results),
    map((results) => {
      return results.map((res) => {
        return {
          birth_year: res.birth_year,
          name: res.name
        } as User
      })
    }),
    startWith([])
  );

  readonly localUsers$ = new BehaviorSubject<User[]>([]);

  readonly allUsers$ = combineLatest([this.response$, this.localUsers$]).pipe(
    map(([fromServer, localUsers]) => {
      return [...fromServer, ...localUsers]
    })
  )

  responseUsers: User[] = []
  response?: APIResponse;
  users?: User[]

  constructor(private http: HttpClient) {

    console.log('Constructor', this.input)
    this.userName = "Test"
  }
  ngAfterViewInit(): void {
    console.log('After init', this.input)
  }
  ngOnInit(): void {
    console.log('OnInit', this.input)
  }

  submitName() {
    if (!this.userName) return
    this.localUsers$.next(
      [...this.localUsers$.value, {
        name: this.userName,
        birth_year: 'unknown'
      }]
    )

    //this.userName = undefined;
  }

  changeName(name: string) {
    this.userName = name;
  }
}


// () - событие из щаблона в компонент
// [] - от компонента в шаблон
// [()] - механизм привязки