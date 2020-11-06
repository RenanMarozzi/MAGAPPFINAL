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
      this.Nome= usuarios[0].Nome;
      this.DataNascimento= usuarios[0].DataNascimento;
      this.Sexo= usuarios[0].Sexo;
      this.EstadoCivil= usuarios[0].EstadoCivil;
      this.Endereco= usuarios[0].Endereço; 
      this.Telefone= usuarios[0].Telefone;
      this.DtBatismo= usuarios[0].DtBatismo;
      this.NvlTreinamento= usuarios[0].NvlTreinamento;
      this.SaberImportante= usuarios[0].SaberImportante;
      this.Email= usuarios[0].Email;
      this.Senha= usuarios[0].Senha;
    });



  }
}
