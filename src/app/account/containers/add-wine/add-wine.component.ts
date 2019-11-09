import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsService} from "../../../products/services/products.service";
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";
import {AddWineViewComponent} from "../../components/add-wine-view/add-wine-view.component";

@Component({
  selector: 'app-add-wine',
  templateUrl: './add-wine.component.html',
  styleUrls: ['./add-wine.component.css']
})
export class AddWineComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;

  @ViewChild(AddWineViewComponent, {static: false})
  addWineView: AddWineViewComponent;

  constructor(
    private productService: ProductsService,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
        if (auth) {
          this.isLoggedIn = true;
          this.loggedInUser = auth.email;
        } else {
          this.isLoggedIn = false;
        }
      }
    );
  }

  unsavedData(): boolean {
    return this.addWineView.addWineForm.dirty;
  }

  addWine(wine) {
    this.productService.addWine(wine);
    this.router.navigate(['/account'])
  }
}
