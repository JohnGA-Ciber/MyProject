import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../share/services/auth.service'
import { Perfil } from "../../../share/interfaces/perfil.interface";
import { Vars } from '../../../config/vars.config';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  img: string;
  admin: boolean = false;
 

  constructor(private authService: AuthService) {
    
   }

   perfil: Perfil = {
    photoUrl: '',
    email: '',
    username: ''
  }

  ngOnInit() {
    this.authService.isAuth().subscribe(res => {
      console.log(res);
      this.perfil.username = res.displayName;
      this.perfil.email = res.email;
      this.perfil.photoUrl = res.photoURL;
      this.img = res.photoURL;
      if(res.email === Vars.adminEmail){
        this.admin = true;
      }else{
        this.admin = false;
      }
    })

    
  }


  updateCurrentUser(){
      this.authService.updateUser(this.perfil);
  }

  logout(){
    this.authService.doLogout();
  }

}
