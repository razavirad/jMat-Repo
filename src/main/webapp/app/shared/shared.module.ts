import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JMatSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JMatSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JMatSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JMatSharedModule {
  static forRoot() {
    return {
      ngModule: JMatSharedModule
    };
  }
}
