import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  Nome: String;
  DataNascimento: String;
  Sexo: String;
  EstadoCivil: String;
  Endereco: String;
  Telefone: String;
  Email: String;
  DtBatismo: String;
  NvlTreinamento: String;
  SaberImportante: String;
  
  Senha: String;
  ConfSenha: String;

  text = 'Meu texto sobre algum assunto';
  
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.ListarPerfil();
  }
  
  ListarPerfil(){
    this.usuariosService.ListaPerfil().then(usuarios => {
      this.Nome= usuarios.Nome;
      this.DataNascimento= usuarios.DataNascimento;
      this.Sexo= usuarios.Sexo;
      this.EstadoCivil= usuarios.EstadoCivil;
      this.Endereco= usuarios.Endereço; 
      this.Telefone= usuarios.Telefone;
      this.DtBatismo= usuarios.DtBatismo;
      this.NvlTreinamento= usuarios.NvlTreinamento;
      this.SaberImportante= usuarios.SaberImportante;
      this.Email= usuarios.Email;
      this.Senha= usuarios.Senha;
    });



  }
}
