import { NgModule } from '@angular/core';
import { MatIconModule, MatCardModule, MatToolbarModule, MatButtonModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule],
    exports: [MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule],
})
export class MaterialModule { }