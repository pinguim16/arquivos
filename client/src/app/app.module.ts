import { AutoresListagemComponent } from './autores/autores-listagem/autores-listagem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { environment } from '../environments/environment';
import { FieldsetModule } from 'primeng/components/fieldset/fieldset';
import { FileUploadModule } from 'primeng/components/fileupload/fileupload';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { MessagesModule } from 'primeng/components/messages/messages';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/components/panel/panel';
import { PrimeNgModules } from './app.primeng.ui';
import { routes } from './app.routes';
import { AutoresCadastroComponent } from './autores/autores-cadastro/autores-cadastro.component';
import { MegaCadastroComponent } from './mega/mega-cadastro/mega-cadastro.component';
import { MegaListagemComponent } from './mega/mega-listagem/mega-listagem.component';
import { ArquivoListagemComponent } from './arquivos/arquivo-listagem/arquivo-listagem.component';
import { ArquivoCadastroComponent } from './arquivos/arquivo-cadastro/arquivo-cadastro.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    AutoresListagemComponent,
    AutoresCadastroComponent,
    MegaCadastroComponent,
    MegaListagemComponent,
    ArquivoListagemComponent,
    ArquivoCadastroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    PanelModule,
    FieldsetModule,
    InputMaskModule,
    MessagesModule,
    BrowserAnimationsModule,
    DataTableModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    FileUploadModule,
    PrimeNgModules
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
