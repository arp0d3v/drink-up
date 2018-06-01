import { Injectable, EventEmitter } from '@angular/core';
import { User, ToastModel } from 'models';
import { Observable } from 'rxjs/observable';
@Injectable()
export class SharedService {
    user: User;
    isUserRegistered = false;
    onUserUpdated = new EventEmitter<User>();
    onToastSuccess = new EventEmitter<ToastModel>();
  onToastError = new EventEmitter<ToastModel>();
  onToastWarning = new EventEmitter<ToastModel>();
  onToastInfo = new EventEmitter<ToastModel>();
    constructor() {
        this.reloadUser();
    }
    reloadUser() {
        const userAsString = localStorage.getItem('user');
        if (userAsString && userAsString.length > 0) {
            this.user = JSON.parse(userAsString);
            this.isUserRegistered = true;
        } else {
            this.user = null;
            this.isUserRegistered = false;
        }
        this.onUserUpdated.emit(this.user);
    }
    saveUser(user: User) {
        localStorage.setItem('user', JSON.stringify(user));
        this.onUserUpdated.emit(this.user);
    }
    logout() {
      localStorage.removeItem('user');
      this.user = null;
      this.onUserUpdated.emit(this.user);
    }
    toastSuccess(title: string, body: string) {
        this.onToastSuccess.emit(new ToastModel(body, title));
      }
      toastError(title: string, body: string) {
        this.onToastError.emit(new ToastModel(body, title));
      }
      toastWarning(title: string, body: string) {
        this.onToastWarning.emit(new ToastModel(body, title));
      }
      toastInfo(title: string, body: string) {
        this.onToastInfo.emit(new ToastModel(body, title));
      }
      get breakpoint_sm(): number {
        return 576;
      }
      get breakpoint_md(): number {
        return 768;
      }
      get breakpoint_lg(): number {
        return 992;
      }
      get breakpoint_xl(): number {
        return 1200;
      }
}
