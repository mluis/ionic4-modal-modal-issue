import { Component } from '@angular/core';
import {Modal1Page} from './modal1/modal1.page';
import {ModalControllerComponent} from '../modal-controller/modal-controller.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalcontrollercomponent: ModalControllerComponent) {

      this.modalcontrollercomponent.presentModal(Modal1Page, {}, (response) => {
          console.log('Response from modal2', response);
      }, '1');

  }

}
