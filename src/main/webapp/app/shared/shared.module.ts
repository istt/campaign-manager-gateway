import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { PasswordStrengthBarComponent } from './util/password-strength-bar.component';
import {
    CampaignManagerGatewaySharedLibsModule,
    CampaignManagerGatewaySharedCommonModule,
    JhiLoginModalComponent,
    HasAnyAuthorityDirective
} from './';

@NgModule({
    imports: [CampaignManagerGatewaySharedLibsModule, CampaignManagerGatewaySharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective, PasswordStrengthBarComponent],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [CampaignManagerGatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective, PasswordStrengthBarComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CampaignManagerGatewaySharedModule {}
