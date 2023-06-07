import { Component } from '@angular/core';

@Component({
  selector: 'app-task4-add-blocks',
  templateUrl: './task4-add-blocks.component.html',
  styleUrls: ['./task4-add-blocks.component.scss']
})
export class Task4AddBlocksComponent {
  blocks: string[] = ['a', 'b', 'c']
  value: string = ''

  addValue(event: any) {
    const newValue = event.target.value
    this.value = newValue
  }

  addBlock(index: number) {
    this.blocks.splice(index + 1, 0, this.value)
  }

}
