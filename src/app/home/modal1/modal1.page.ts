import { Component, OnInit } from '@angular/core';
import {ModalControllerComponent} from '../../modal-controller/modal-controller.component';
import {Modal2Page} from '../modal2/modal2.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.page.html',
  styleUrls: ['./modal1.page.scss'],
})
export class Modal1Page implements OnInit {

  constructor(private modalcontrollercomponent: ModalControllerComponent,
              private modalController: ModalController) {

      this.modalcontrollercomponent.presentModal(Modal2Page, {}, (response) => {
          console.log('Response from modal1', response);
          if (response.data === true) {
              this.modalController.dismiss('', '', '1');
          }
      }, '2');

  }

  ngOnInit() {
  }

}
