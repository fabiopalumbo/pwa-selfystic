import {
  BrowserModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

export class GestureConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { velocity: 0.4, threshold: 20 } // override default settings
  };
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: GestureConfig
  }], // use our custom hammerjs config
  bootstrap: [AppComponent]
})
export class AppModule { }
