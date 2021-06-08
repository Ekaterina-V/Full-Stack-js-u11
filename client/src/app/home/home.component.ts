import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ApiService } from '../services/api.service';
import { LocalTime } from '../models/api.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  time?: LocalTime;

  constructor(private userService: UserService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getLocalTime();
  }

  getLocalTime(): void {
    this.apiService.getLocalTime()
      .subscribe((data: any) => {
        this.time = data;
    });
  }
}
