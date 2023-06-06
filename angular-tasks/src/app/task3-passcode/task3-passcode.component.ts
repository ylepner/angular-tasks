import { Component } from '@angular/core';

@Component({
  selector: 'app-task3-passcode',
  templateUrl: './task3-passcode.component.html',
  styleUrls: ['./task3-passcode.component.scss']
})
export class Task3PasscodeComponent {
  numbers: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  password: number[] = [7, 3, 1, 6]
  pressedNumbers: number[] = []
  asterisks: string[] = []


  addPressedNumbers(number: number) {
    this.asterisks.push('*')
    this.pressedNumbers.push(number)
    console.log(`arr length = ${this.pressedNumbers.length}`)
    if (this.pressedNumbers.length === 4) {
      if (String(this.pressedNumbers) === String(this.password)) {
        this.clearData()
        return true
      } else {
        this.clearData()
        return false
      }
    } else {
      return
    }
  }

  clearData() {
    this.pressedNumbers = []
    this.asterisks = []
  }
}