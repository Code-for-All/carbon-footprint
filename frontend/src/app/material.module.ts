import { NgModule } from '@angular/core';
import { MatIconModule, MatCardModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav'; 
@NgModule({
    imports: [MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatListModule, MatSidenavModule],
    exports: [MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatListModule, MatSidenavModule],
})
export class MaterialModule { }