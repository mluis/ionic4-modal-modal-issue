import { Component } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Modal1Page} from './modal1/modal1.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalcontroller: ModalController) {

      const run = async () => {
        const modal = await this.modalcontroller.create({ component: Modal1Page, componentProps: {}});
        return await modal.present();
      };
      run();
  }

}
