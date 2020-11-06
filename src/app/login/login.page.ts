import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Email;
  Senha;
  constructor(private router: Router, private usuariosService: UsuariosService, public toastController: ToastController) { }

  Login() {

    this.usuariosService.login(this.Email, this.Senha).then(usuarios => {
      if(usuarios!= undefined) {
        this.router.navigate(["/home"]);
        this.Email='';
        this.Senha='';
        this.usuariosService.UsuarioLogado(usuarios);
      } else{
        this.presentToast('Credenciais Invalidas');
      }
    });

  }
  async presentToast(Mensagem) {
    const toast = await this.toastController.create({
      message: Mensagem, 
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {
  }

}
