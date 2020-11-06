import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
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
  UsuarioAdm: Usuario = {
    Nome: 'administrador',
    DataNascimento: '07/11/1998',
    Sexo: 'Masculino',
    EstadoCivil: 'Solteiro',
    Endereco: 'Avenida Teste, 1000',
    Telefone: '(11) 9799-7070',
    DtBatismo: '14/07/2012',
    NvlTreinamento: 'Basico',
    SaberImportante: 'Nada a Declarar',
    Email: 'adm@app.com.br',
    Senha: '123456'
  };
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
      if (usuarios == null && (Email != 'adm@app.com.br' && Senha != '123456')) {
        this.CadastraUsuario(this.UsuarioAdm);
      } else if (usuarios == null && (Email=='adm@app.com.br' && Senha=='123456')){
        this.CadastraUsuario(this.UsuarioAdm);
        return this.UsuarioAdm
        
      }
      else {
        for (let i = 0; i < usuarios.length; i++) {
          if (usuarios[i].Email == Email && usuarios[i].Senha == Senha) {
            return usuarios[i];
          }
        };
      }
    });
  }






}
