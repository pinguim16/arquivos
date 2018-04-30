import { Autor } from './autor';
import { Mega } from './mega';

export class Arquivo {
    id: number;
    nome: string;
    senha: string;
    linkDownload: string;
    tamanho: number;
    mega: Mega;
    megaBackup: Mega;
    autor: Autor;

    constructor() {
        this.mega = new Mega();
        this.megaBackup = new Mega();
        this.autor = new Autor();
    }

    static instanciarObjetoVazios(arquivo: Arquivo) {
        if (arquivo.mega == null) {
            arquivo.mega = new Mega();
        }
        if (arquivo.megaBackup == null) {
            arquivo.megaBackup = new Mega();
        }
        if (arquivo.autor == null) {
            arquivo.autor = new Autor();
        }
    }

    static checkNullObjetos(arquivo: Arquivo) {
        if (arquivo.mega.id == null || arquivo.mega.id == undefined) {
            arquivo.mega = null;
        }
        if (arquivo.megaBackup.id == null || arquivo.megaBackup.id == undefined) {
            arquivo.megaBackup = null;
        }
        if (arquivo.autor.id == null || arquivo.autor.id == undefined) {
            arquivo.autor = null;
        }
    }
}