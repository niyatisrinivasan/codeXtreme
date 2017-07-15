import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatBotServiceProvider } from '../../providers/chatbotservice/chatbotservice'

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  chatId: any
  messages: any
  gotMessages: boolean = false
  isUserMsg: boolean = false
  userMsg: any
  user: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public chatBotService: ChatBotServiceProvider) {
    // this.user = this.navParams.get('user')
    //this.user = [];
    this.chatId = this.navParams.get('chatId')
    this.getOneData(this.chatId)
    // console.log(this.user)
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  sendMessage() {
    let self = this;
    let uid = self.user[0].chatid
    let uName = self.user[0].name
    let userMsgs = self.user[0].messages

    var request = {
      chatid: uid,
      name: uName,
      adminmsg: self.userMsg,
      category: userMsgs[userMsgs.length - 1].category
    }

    console.log(request)

    self.chatBotService.sendData(request)
      .then(function () {
        console.log(uid)
        self.getOneData(uid)
      })
  }

  getOneData(uid) {
    let self = this;
    // var x;
    self.chatBotService.getOneData(uid).then(data => {
      self.user = [data.json()]
      // console.log([data.json()])
      // self.userMsg = null; //clear input
      //  = data.json()
      //console.log(data.json())
      console.log("hi")
      console.log(self.user)

      self.gotMessages = true;
      self.messages = self.user[0].messages
    })
  }
}
