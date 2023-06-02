import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { map, startWith, BehaviorSubject, combineLatest } from 'rxjs';
import { APIResponse, User } from '../models';

const URL = `https://swapi.dev/api/people/`

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component {
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

  }

  changeName(name: string) {
    this.userName = name;
  }
}
