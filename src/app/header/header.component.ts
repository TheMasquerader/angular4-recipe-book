import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component } from '@angular/core';
import { Response } from '@angular/http';

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
                (response: Response) => {
                    console.log(response);
                }
            );
    }

    onFetchData() {
        this.dataStorageService.fetchData();
    }

    onLogout() {
        this.authService.logout();
    }
}
