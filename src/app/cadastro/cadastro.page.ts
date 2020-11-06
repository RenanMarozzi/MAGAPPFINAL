import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

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

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
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
  ConfSenha: String;

  usuario: Usuario;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {

  }

  Cadastrar() {
    this.usuario = {
      Nome: this.Nome, DataNascimento :this.DataNascimento, Sexo: this.Sexo, EstadoCivil: this.EstadoCivil, Endereco: this.Endereco, Telefone: this.Telefone, DtBatismo: this.DtBatismo, NvlTreinamento: this.NvlTreinamento, SaberImportante: this.SaberImportante, Email: this.Email, Senha:this.Senha
      }
    this.usuariosService.CadastraUsuario( this.usuario );
    

  }

}
