import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AwwViewComponent } from './component/aww-view/aww-view.component';
import { DataViewComponent } from './component/data-view/data-view.component';
import { ChildViewComponent } from './component/child-view/child-view.component';
import { RealstuffViewComponent } from './component/realstuff-view/realstuff-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AwwViewComponent,
    DataViewComponent,
    ChildViewComponent,
    RealstuffViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
