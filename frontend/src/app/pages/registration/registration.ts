import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-registration',
  imports: [IconFieldModule, InputIconModule, ButtonModule, DividerModule ],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {}
