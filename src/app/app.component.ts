import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomePipe } from './welcome.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,WelcomePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pipes';
  name = "Muhammad kashif Shah ";
  msg = "Welcome To Decoder";
  company={
    Name: 'Decoder',
    City: 'Lahore',
    Country:'Pakistan'
  }
  employee: any[] = [
    { id: 1, Name: 'Kashif', city: 'Lahore' },
    { id: 2, Name: 'Asif', city: 'D I Khan' },
    {id:3,Name:'Saqib',city:'Peshawar'},
  ]
  per = 2.5;
  curr = 34.45;
  currentdate = new Date;
}
