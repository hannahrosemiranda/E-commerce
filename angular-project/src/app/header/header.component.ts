import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public totalitem = 0;
  public isLoggedIn = false; // Add a new property to track login status
  public username = ''; // Add a new property to store the username

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart.getproduct().subscribe((res) => {
      this.totalitem = res.length;
    });

    // Check if the user is already logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.isLoggedIn = true;
      this.username = loggedInUser;
    }
  }

  onLogout() {
    // Clear the logged-in user information from local storage
    localStorage.removeItem('loggedInUser');
    this.isLoggedIn = false;
    this.username = '';
  }
}
