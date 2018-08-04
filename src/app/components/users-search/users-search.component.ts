import { Component, Input } from '@angular/core';

import { UsersSearchService } from '../../services/users-search.service';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.css']
})
export class UsersSearchComponent {

  public location: string;
  public language: string;

  public results: any[] = [];
  public selected = false;
  public selectedUser: any;
  public errorText = '';


  constructor(private usersSearchService: UsersSearchService) { }

  search(location: string, language: string) {
    this.selected = false;
    this.errorText = '';
    if (location || language) {
      this.location = location;
      this.language = language;

      this.usersSearchService
      .getUsersByLocationAndLanguage(location, language)
      .subscribe(
        users => {
                  this.results = users;
      },
        error => {
          this.results = [];
          this.errorText = 'No Users found with this combination. Please try again!';
        });

    }
  }

  getDetails(userName: string) {
    this.usersSearchService.getUserDetailsByName(userName).subscribe(
      userDetails => {
        this.selectedUser = userDetails;
        this.selected = true;
      },
      error => {
        this.selected = false;
        console.error(error);
      });
  }


}
