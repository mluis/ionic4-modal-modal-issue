import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Modal2Page} from '../modal2/modal2.page';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.page.html',
  styleUrls: ['./modal1.page.scss'],
})
export class Modal1Page implements OnInit {

  constructor(private modalcontroller: ModalController) {
      const run = async () => {
          const modal = await modalcontroller.create({ component: Modal2Page, componentProps: {}});
          modal.onDidDismiss().then((data) => {
              console.log('modal 2 dismissed', data.data);
            if(data.data){
                console.log('preparing to dismiss modal 1', data.data);
              this.modalcontroller.dismiss();
            }
          });
          return await modal.present();
      };
      run();

  }

  ngOnInit() {
  }

}
