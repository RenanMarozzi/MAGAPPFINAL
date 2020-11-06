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
  CadastraUsuario( usuario: Usuario) {
       
  this.usuarios.push ({ ... usuario});
  this.storage.set ('usuarios', this.usuarios);


  }

  ListaPerfil() {


  }

  ListaCelula() {


  }

  login() {


  }






}
