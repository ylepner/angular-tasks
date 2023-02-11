import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse, Result, User } from '../models';
import { map } from 'rxjs'

const URL = `https://swapi.dev/api/people/`

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('inputElement')
  input!: ElementRef<any>

  userName?: string

  readonly response$ = this.http.get<APIResponse>(URL).pipe(
    map(res => res.results)
  );
  responseUsers: User[] = []
  response?: APIResponse;
  users?: User[]

  constructor(private http: HttpClient) {
    this.http.get<APIResponse>(URL).subscribe((res) => {
      this.responseUsers = res.results.map((res) => {
        return {
          birth_year: res.birth_year,
          name: res.name
        }
      })
    });
    console.log('Constructor', this.input)

  }
  ngAfterViewInit(): void {
    console.log('After init', this.input)
  }
  ngOnInit(): void {
    console.log('OnInit', this.input)
  }

  submitName() {
    if (this.userName) {
      this.responseUsers?.push({
        name: this.userName,
        birth_year: 'unknown'
      })
      this.userName = undefined;
    }
  }
}


