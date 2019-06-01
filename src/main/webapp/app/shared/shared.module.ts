import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JHipsterSampleApplicationSharedLibsModule,
  JHipsterSampleApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JHipsterSampleApplicationSharedLibsModule, JHipsterSampleApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JHipsterSampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterSampleApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JHipsterSampleApplicationSharedModule
    };
  }
}
