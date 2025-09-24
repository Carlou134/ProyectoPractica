import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { RotatorDirective } from '../rotator.directive';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RotatorDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent {
  user = {
    name: "Carlos",
    pictureProfile: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    hobbies: [
      "Programar",
      "Bailar",
      "Jugar Fuchibol"
    ]
  };

  title = 'ProyectoPractica';

  numero = 1;

  @Input() message = "hola desde el padre";
  @Output() messageEmitted = new EventEmitter<string>();

  @Input() balance = 0;
  @Output() balanceChange = new EventEmitter<number>();

  sendMessage(){
    this.messageEmitted.emit('Hola desde el hijo');
  }

  BotonPrueba($event: Event){
    console.log($event.target);
    console.log(this.message);
    this.sendMessage();
  }

  onChangeBalance($event: Event){
    const newBalance = Number(($event.target as HTMLInputElement).value);
    this.balance = newBalance;
    this.balanceChange.emit(this.balance);
  }
}

