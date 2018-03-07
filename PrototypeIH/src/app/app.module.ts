import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { FilialDetailPage } from '../pages/filial-detail/filial-detail';
import { LoginPageModule } from '../pages/login/login.module';
import { ArrayUserGlobalProvider } from '../providers/array-user-global/array-user-global';
import { CadastroPage } from '../pages/cadastro/cadastro';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ContactPage,
    HomePage,
    AboutPage,
    FilialDetailPage,
    CadastroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ContactPage,
    HomePage,
    AboutPage,
    FilialDetailPage,
    CadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArrayUserGlobalProvider
  ]
})
export class AppModule {}
