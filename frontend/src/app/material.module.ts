import { NgModule } from '@angular/core';
import { MatIconModule, MatCardModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { MatListModule} from '@angular/material/list';
@NgModule({
    imports: [MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatListModule],
    exports: [MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatListModule],
})
export class MaterialModule { }