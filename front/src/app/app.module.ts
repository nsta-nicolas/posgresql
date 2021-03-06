import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { IndexComponent } from './index/index.component';
import { ProfilComponent } from './profil/profil.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
// import { FpasswordComponent } from './fpassword/fpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { SeriedetailComponent } from './seriedetail/seriedetail.component';
// import { MovieService } from './movie.service';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'movie/:movieID', component: SerieComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscriptionComponent,
    IndexComponent,
    ProfilComponent,
    // FpasswordComponent,
    SeriedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
