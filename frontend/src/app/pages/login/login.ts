import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  imports: [IconFieldModule, InputIconModule, ButtonModule, DividerModule ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
