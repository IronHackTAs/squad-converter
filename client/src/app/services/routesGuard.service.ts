import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '../../../node_modules/@angular/router';
import { Injectable } from '../../../node_modules/@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuardService implements CanActivate {
  constructor(public dataService: DataService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean {
    if (this.dataService.getData().name !== '' || this.dataService.getData().email !== '') {
      return true;
    } else {
      this.router.navigate(['/jeep']);
      return false;
    }

  }
}
