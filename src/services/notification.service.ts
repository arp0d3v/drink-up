import { Injectable, EventEmitter } from '@angular/core';
import { User } from 'models';
import { SharedService } from 'services';
import { Observable } from 'rxjs/observable';
import { share } from 'rxjs/operator/share';

@Injectable()
export class NotificationService {
    user: User;
    constructor (
        private sharedService: SharedService
    ) {
        this.sharedService.reloadUser();
        this.user = sharedService.user;
    }
}
