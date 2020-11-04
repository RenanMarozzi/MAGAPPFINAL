import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
aux;
  constructor(private storage: Storage) { }
  CadastraUsuario(Nome, DataNascimento, sexo, EstadoCivil, Endereco, telefone, DtBatismo, NvlTreinamento, SaberImportante, Email, Senha, ConfSenha) {

    let Usuario = { "Nome": Nome, "DataNascimento": DataNascimento, "sexo": sexo, "EstadoCivil": EstadoCivil, "Endereco": Endereco, "telefone": telefone, "DtBatismo": DtBatismo, "NvlTreinamento": NvlTreinamento, "SaberImportante": SaberImportante, "Email": Email, "Senha": Senha, "ConfSenha": ConfSenha };


    this.storage.get('usuarios').then((usuarios: any) => {      
      if (usuarios == null) {
        this.storage.set('usuarios', { USUARIOS: { Usuario } });
      } else {
         this.aux = usuarios.USUARIOS;
        this.storage.set('usuarios', { USUARIOS:  this.aux +  Usuario  } );
      }

    });
  }

  ListaPerfil() {


  }

  ListaCelula() {


  }

  login() {


  }






}
