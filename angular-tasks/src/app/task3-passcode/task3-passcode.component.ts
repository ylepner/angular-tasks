import { Component } from '@angular/core';

@Component({
  selector: 'app-task3-passcode',
  templateUrl: './task3-passcode.component.html',
  styleUrls: ['./task3-passcode.component.scss']
})
export class Task3PasscodeComponent {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  password: number[] = [7, 3, 1, 6]
  pressedNumbers: number[] = []
  asterisks: string[] = []


  addPressedNumbers(number: number) {
    this.pressedNumbers.push(number)
    this.asterisks.push('*')
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