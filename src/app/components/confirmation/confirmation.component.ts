import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent implements OnInit{
  @Input('name') name!: string;
  @Input('total') total!: number;

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    
  }

  goBack() {
    this.router.navigate(['/product-list'])
  }
  
}
