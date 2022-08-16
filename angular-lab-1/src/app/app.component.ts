import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the best simple Angular app ever!!';
  disablesNewMessage = true;
  messages = [
    {
      sender: "Ludovic",
      message: "Latest message from Luovic",
    },
    {
      sender: "Jessica",
      message: "Latest message from Jessica"
    }
  ]

  onSendMessage() {
    let message = {
      sender: "Mica",
      message: "New message from Mica"
    }
    this.messages.push(message);
  }

  constructor() {
    console.log("Initiating Angular AppComponent Class");
    setTimeout(() => {
      this.disablesNewMessage = !this.disablesNewMessage;
    }
    , 2000)
  }
}
