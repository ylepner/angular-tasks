import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from './task1/task1.component';
import { Task2StoreQueueComponent } from './task2-store-queue/task2-store-queue.component';
import { Task3PasscodeComponent } from './task3-passcode/task3-passcode.component';
import { Task4AddBlocksComponent } from './task4-add-blocks/task4-add-blocks.component';

const routes: Routes = [
  { path: 'task1', component: Task1Component },
  { path: 'task2', component: Task2StoreQueueComponent },
  { path: 'task3', component: Task3PasscodeComponent },
  { path: 'task4', component: Task4AddBlocksComponent },
  { path: '**', component: Task1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
