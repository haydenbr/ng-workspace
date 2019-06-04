import { NgModule } from '@angular/core';
import { SpokeSharedComponent } from './spoke-shared.component';
import { SpokeSharedService } from './spoke-shared.service';

@NgModule({
  declarations: [SpokeSharedComponent],
  imports: [
  ],
  exports: [SpokeSharedComponent],
  providers: [SpokeSharedService]
})
export class SpokeSharedModule { }
