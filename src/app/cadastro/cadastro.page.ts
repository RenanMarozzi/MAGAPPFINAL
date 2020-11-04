import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  Nome: String;
  DataNascimento: String;
  sexo: String;
  EstadoCivil: String;
  Endereco: String;
  telefone: String;
  DtBatismo: String;
  NvlTreinamento: String;
  SaberImportante: String;
  Email: String;
  Senha: String;
  ConfSenha: String;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {

  }

  Cadastrar() {
    this.usuariosService.CadastraUsuario(this.Nome, this.DataNascimento, this.sexo, this.EstadoCivil, this.Endereco, this.telefone, this.DtBatismo, this.NvlTreinamento, this.SaberImportante, this.Email, this.Senha, this.ConfSenha);
  }

}
