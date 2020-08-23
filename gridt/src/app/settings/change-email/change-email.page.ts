import { Component, Input } from '@angular/core';
import { PopoverController, LoadingController, AlertController } from '@ionic/angular';

import { Observable, timer } from 'rxjs';
import { timeout } from 'rxjs/operators';

import { NgForm } from '@angular/forms';

import { SettingsService} from '../../core/settings.service'
import { Settings } from '../../core/settings.model';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.page.html',
  styleUrls: ['./change-email.page.scss'],
})
export class ChangeEmailPage{
  edit_email$: boolean = true;

  constructor(
    private SetService: SettingsService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public popoverCntrl: PopoverController
  ) { }

  ngOnInit() {
  }

  public closePopover() {
    this.popoverCntrl.dismiss({
      'dismissed': true
    });
  }


  /*
   * Change the email address
   */
  async write_email(form: NgForm) {
    this.edit_email$ = true;

    const el = await this.loadingCtrl.create({
      message: 'Updating email address...'
    });

    el.present();

    this.SetService.postEmail$(form.value.password, form.value.email).pipe(timeout(500)).subscribe(
      () => {
        el.dismiss();
        this.closePopover();
      },
      (error) => {
        el.dismiss();
        this.showError(error);
      }
    );

    timer(500).subscribe( () => this.SetService.getUserSettings());
  }

  async showError(error:string) {
    const el = await this.alertCtrl.create({
      header: "Something went wrong while saving your settings.",
      message: error,
      buttons: ["Continue"]
    });

    el.present();
  }

}
