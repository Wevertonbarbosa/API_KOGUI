import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardCharacterComponent } from './Components/card-character/card-character.component';
import { DetailsComponent } from './Pages/details/details.component';
import { routes } from './app.routes'; // Importe o array de rotas
import { RouterModule } from '@angular/router';
import { CharactersComponent } from './Pages/characters/characters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Pages/login/login.component';
import { SelectComponent } from './Components/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    CardCharacterComponent,
    DetailsComponent,
    CharactersComponent,
    LoginComponent,
    SelectComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  providers: [provideHttpClient()], // Registre seu serviço aqui
  bootstrap: [AppComponent], // Defina o componente raiz que será inicializado
})
export class AppModule {}
