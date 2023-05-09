import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 class="text-success">CompView</h2>
    <h2 class="text-danger">CompView</h2>
    <h2 class="text-special">CompView</h2>
    <h2 [class]="textSuccess">CompView</h2>
    <h2 [class.text-danger]="hasError">CompView Error</h2>
    <h2 [ngClass]="messageClass">CompView Message Classes</h2>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent {

  textSuccess: string = "text-success";
  hasError: boolean = true;
  messageClass: object = {
    "text-success": !this.hasError,
    "text-danger": this.hasError
  }

  name: string = "TestWorks";

}
