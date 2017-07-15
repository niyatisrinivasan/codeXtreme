import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatBotServiceProvider } from '../../providers/chatbotservice/chatbotservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userMsg: any
  messages: any[]
  context: any
  sessionId: any
  constructor(public navCtrl: NavController, public chatBotService: ChatBotServiceProvider, ) {

  }
  
  addMessage(text, type) { //adds message to chatInterface
    this.messages.push({
      text: text,
      isUserMsg: type
    })
  }
  //  sendMessage() {
  //   let self = this;
  //   self.addMessage(this.userMsg, true)

  //   var request = {
  //     "userMsg": this.userMsg,
  //     "id": this.sessionId,
  //     "context": this.context
  //   }

  //   this.chatBotService.sendRequest(request)
  //     .then(function (result) {
  //       self.addMessage(result.json().botMessage, false);
  //       self.context = result.json().context;
  //       console.log(self.context)
  //     })
  //  }
}
