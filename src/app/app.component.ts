import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FAQPage } from '../pages/faq/faq';
import { PositivePage } from '../pages/positive/positive';
import { NegativePage } from '../pages/negative/negative';
import { AttentionPage } from '../pages/attention/attention';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ name: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { name: 'Home', component: HomePage},
      { name: 'Requires Attention', component: AttentionPage },
      { name: 'Positive Feedbacks', component: PositivePage },
      { name: 'Negative Feedbacks', component: NegativePage },
      { name: 'FAQ', component: FAQPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page);
  }
}
