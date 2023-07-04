import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from '../shared/models/user'
import { IUserLogin } from '../shared/models/interfaces/IUserLogin';
import { USER_LOGIN_URL } from '../shared/models/constants/urls';
import { tap } from 'rxjs/internal/operators/tap';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable:Observable<User>;
  toastrService: any;
  currentUser!: { name: any; address: any; };
  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
   }

   login(userLogin:IUserLogin):Observable<User> {
   return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
    tap({
      next: (user) =>{
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to Shapi. ${user.name}!`,
            'Login Successful'
          )
      },
      error: (errorResponse) => {
        this.toastrService.error(errorResponse.error, 'Login Failed');
      }
    })
   );
   }
}
