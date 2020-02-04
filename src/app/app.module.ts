import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Modal1Page} from './home/modal1/modal1.page';
import {Modal2Page} from './home/modal2/modal2.page';
import {ModalControllerComponent} from './modal-controller/modal-controller.component';

@NgModule({
  declarations: [AppComponent, Modal1Page, Modal2Page, ModalControllerComponent],
  entryComponents: [Modal1Page, Modal2Page, ModalControllerComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      ModalControllerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
