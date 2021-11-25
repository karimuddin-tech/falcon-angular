import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatSelectModule, MatDialogModule, MatExpansionModule, MatCheckboxModule, CdkAccordionModule, MatIconModule],
  exports: [MatButtonModule, MatInputModule, MatSelectModule, MatDialogModule, MatExpansionModule, MatCheckboxModule, CdkAccordionModule, MatIconModule],
})
export class AngularMaterialModule {}
