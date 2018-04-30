import { Arquivo } from './../domain/arquivo';
import { Mega } from './../domain/mega';
import { Autor } from './../domain/autor';
import { Injectable, Injector } from '@angular/core';
import { Http, RequestMethod, URLSearchParams } from '@angular/http';
import { Resource, ResourceParams, ResourceAction } from 'ngx-resource';
import { ResourceMethod } from 'ngx-resource/src/Interfaces';

@Injectable()
@ResourceParams({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
export class Services extends Resource {

    /**
     * Métodos autor
     */
    @ResourceAction({
        url: 'http://localhost:8080/api/autors',
        method: RequestMethod.Post
    })
    saveAutor: ResourceMethod<Autor, Autor>;

    @ResourceAction({
        url: 'http://localhost:8080/api/autors',
        method: RequestMethod.Put
    })
    updateAutor: ResourceMethod<Autor, Autor>;

    @ResourceAction({
        url: 'http://localhost:8080/api/autors',
        method: RequestMethod.Get,
        isArray: true
    })
    getallAutor: ResourceMethod<Autor, Autor[]>;

    @ResourceAction({
        url: 'http://localhost:8080/api/autors',
        method: RequestMethod.Delete,
        path: '/{!id}'
    })
    deleteAutor: ResourceMethod<{ id: any }, any>;

    @ResourceAction({
        url: 'http://localhost:8080/api/autors',
        method: RequestMethod.Get,
        path: '/{!id}'
    })
    getAutor: ResourceMethod<{ id: any }, any>;

    /**
     * Métodos Mega
     */
    @ResourceAction({
        url: 'http://localhost:8080/api/megas',
        method: RequestMethod.Post
    })
    saveMega: ResourceMethod<Mega, Mega>;

    @ResourceAction({
        url: 'http://localhost:8080/api/megas',
        method: RequestMethod.Put
    })
    updateMega: ResourceMethod<Mega, Mega>;

    @ResourceAction({
        url: 'http://localhost:8080/api/megas',
        method: RequestMethod.Get,
        isArray: true
    })
    getallMega: ResourceMethod<Mega, Mega[]>;

    @ResourceAction({
        url: 'http://localhost:8080/api/megas',
        method: RequestMethod.Delete,
        path: '/{!id}'
    })
    deleteMega: ResourceMethod<{ id: any }, any>;

    @ResourceAction({
        url: 'http://localhost:8080/api/megas',
        method: RequestMethod.Get,
        path: '/{!id}'
    })
    getMega: ResourceMethod<{ id: any }, any>;

    /**
     * Métodos Arquivo
     */
    @ResourceAction({
        url: 'http://localhost:8080/api/arquivos',
        method: RequestMethod.Post
    })
    saveArquivo: ResourceMethod<Arquivo, Arquivo>;

    @ResourceAction({
        url: 'http://localhost:8080/api/arquivos',
        method: RequestMethod.Put
    })
    updateArquivo: ResourceMethod<Arquivo, Arquivo>;

    @ResourceAction({
        url: 'http://localhost:8080/api/arquivosList',
        method: RequestMethod.Get,
        isArray: true
    })
    getallArquivo: ResourceMethod<Arquivo, Arquivo[]>;

    @ResourceAction({
        url: 'http://localhost:8080/api/arquivos',
        method: RequestMethod.Delete,
        path: '/{!id}'
    })
    deleteArquivo: ResourceMethod<{ id: any }, any>;

    @ResourceAction({
        url: 'http://localhost:8080/api/arquivos',
        method: RequestMethod.Get,
        path: '/{!id}'
    })
    getArquivo: ResourceMethod<{ id: any }, any>;

}