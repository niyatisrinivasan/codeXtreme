import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatBotServiceProvider } from '../providers/chatbotservice/chatbotservice';
import { FAQPage } from '../pages/faq/faq'
import { PositivePage } from '../pages/positive/positive'
import { NegativePage } from '../pages/negative/negative'
import { AttentionPage } from '../pages/attention/attention';
import { ChatPage } from '../pages/chat/chat';
import { AppGlobals } from '../global';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FAQPage,
    PositivePage,
    NegativePage,
    AttentionPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FAQPage,
    PositivePage,
    NegativePage,
    AttentionPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ChatBotServiceProvider,
    AppGlobals
  ]
})
export class AppModule { }
