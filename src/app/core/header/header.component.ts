import { Component } from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import { AuthService } from './../../auth/auth.service';
import { DataStorageService } from './../../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(
        private dataStorageService: DataStorageService,
        private authService: AuthService) {}

    onSaveData() {
        this.dataStorageService.storeData()
            .subscribe(
                (response) => {
                    console.log(response);
                }
                /* (response: HttpEvent<Object>) => {
                    console.log(response.type === HttpEventType.Sent);
                } */
            );
    }

    onFetchData() {
        this.dataStorageService.fetchData();
    }

    onLogout() {
        this.authService.logout();
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }
}
