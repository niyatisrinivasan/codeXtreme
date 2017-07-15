import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatBotServiceProvider } from '../../providers/chatbotservice/chatbotservice';
import { ChatPage } from '../../pages/chat/chat';

@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})

export class FAQPage {
  user: any
  gotUsers: boolean

  constructor(public navCtrl: NavController, public navParams: NavParams, public chatService: ChatBotServiceProvider) {
    this.gotUsers = false
    this.getData()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttentionPage');
  }

  getData() {
    this.chatService.getData().then(data => {
      var dataJSON = data.json()
      this.user = dataJSON.faq.user

      if(this.user.length > 0) {
        this.gotUsers = true
      }
    })
  }

  viewOneChat(chatId) {
    this.navCtrl.push(ChatPage, { "chatId": chatId })
  }
}

