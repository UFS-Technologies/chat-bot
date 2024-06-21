import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-bot';
  message: string | undefined;
  messages: any[] = [];

  constructor(private socket: Socket,) {   
    
   }
   ngOnInit() { 
    this.socket.fromEvent('new-email').subscribe((res :any)=> {
        if (res && res.message) {
            this.messages.push(res);
        } else {
            // If there's no message or the message is empty
            this.messages.push({ message: "Sorry, I am not much aware of it", sender: "Server" });
        }
    });
}



  sendMessage() {
    console.log('this.message: ', this.message); 
    this.socket.emit('send-event', {message:this.message});
    this.messages.push({sender:'you',message:this.message})
    this.message = '';
  }

  Register() {

    this.socket.emit('send-event', {isRegistration:true});
    this.message = '';
  }

 
}
