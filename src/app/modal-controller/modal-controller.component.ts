import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal-controller',
  templateUrl: './modal-controller.component.html',
  styleUrls: ['./modal-controller.component.scss'],
})
export class ModalControllerComponent implements OnInit {

    constructor(public modalController: ModalController) { }

    async presentModal(modalPage: any, properties: any, cb?: (args: any) => void, modalid?: string) {
        const modal = await this.modalController.create({
            component: modalPage,
            componentProps: {
                properties
            },
            id: modalid
        });
        if (cb) {
            modal.onDidDismiss().then((data) => {
                cb(data);
            });
        }
        return await modal.present();
    }

  ngOnInit() {}

}
