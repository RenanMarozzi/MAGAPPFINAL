import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

interface Usuario {
  Nome: String;
  DataNascimento: String;
  Sexo: String;
  EstadoCivil: String;
  Endereco: String;
  Telefone: String;
  DtBatismo: String;
  NvlTreinamento: String;
  SaberImportante: String;
  Email: String;
  Senha: String;

}


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private storage: Storage) { }
  private usuarios = [];

  CadastraUsuario(usuario: Usuario) {

    this.usuarios.push({ ...usuario });
    this.storage.set('usuarios', this.usuarios);


  }

  ListaPerfil(): any {
    return this.storage.get('UsuarioLogado');
 
  }
  UsuarioLogado(usuario: Usuario) {    
    this.storage.set('UsuarioLogado', usuario);


  }

  login(Email: String, Senha: String): any {
    return this.storage.get('usuarios').then(usuarios => {
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].Email == Email && usuarios[i].Senha == Senha) {
          return usuarios[i];
        }
      };

    });
  }






}
