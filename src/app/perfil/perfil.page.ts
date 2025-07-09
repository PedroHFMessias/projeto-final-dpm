import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonAvatar, 
  IonButton, 
  IonIcon 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonButton, IonIcon]
})
export class PerfilPage {

  // Propriedades com os dados do usuário
  userName: string = 'Usuário Exemplo';
  userEmail: string = 'usuario@email.com';

  constructor(private router: Router) {
    addIcons({ logOutOutline });
  }

  logout() {
    console.log('Usuário deslogado.');
    // Navega o usuário de volta para a tela de login
    this.router.navigate(['/features/auth/pages/login']);
  }
}