import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatOptionModule, MatSlideToggleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatDialogModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AddBookComponent } from './add-book/add-book.component';
import { AddDVDComponent } from './add-dvd/add-dvd.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { DeleteDVDComponent } from './delete-dvd/delete-dvd.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { ReturnDVDComponent } from './return-dvd/return-dvd.component';
import { MembersService } from './members.service';
import { BooksService } from './books.service';
import { DisplayMembersComponent } from './display-members/display-members.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { DisplayDVDsComponent } from './display-dvds/display-dvds.component';
import { HttpModule } from '@angular/http';
import { AddMemberService } from './addMember.service';
import { AddBookService } from './addBook.service';
import { AddDVDService } from './addDVD.service';
import { DeleteBookService } from './deleteBook.service';
import { DeleteDVDService } from './deleteDVD.service';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { BorrowBookService } from './borrowBook.service';
import { DVDService } from './dvd.service';
import { BorrowDVDComponent } from './borrow-dvd/borrow-dvd.component';
import { BorrowDVDService } from './borrowDVD.model';
import { DeleteMemberComponent } from './delete-member/delete-member.component';
import { ReturnBookService } from './returnBook.service';
import { ReturnDVDService } from './returnDVD.service';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { GenerateReportDVDComponent } from './generate-report-dvd/generate-report-dvd.component';
import { ReserveBookComponent } from './reserve-book/reserve-book.component';
import { ReserveBookService } from './reserveBook.service';
import { ReserveDVDComponent } from './reserve-dvd/reserve-dvd.component';
import { ReserveDVDService } from './reserveDVD.service';
import { ReserveDialogComponent } from './reserve-dialog/reserve-dialog.component';
import { ReturnFineDialogComponent } from './return-fine-dialog/return-fine-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddBookComponent,
    AddDVDComponent,
    DeleteBookComponent,
    DeleteDVDComponent,
    AddMemberComponent,
    ReturnBookComponent,
    ReturnDVDComponent,
    DisplayMembersComponent,
    DisplayBooksComponent,
    DisplayDVDsComponent,
    BorrowBookComponent,
    BorrowDVDComponent,
    DeleteMemberComponent,
    GenerateReportComponent,
    GenerateReportDVDComponent,
    ReserveBookComponent,
    ReserveDVDComponent,
    ReserveDialogComponent,
    ReturnFineDialogComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatTableModule,
    HttpClientModule,
    HttpModule,
    MatDialogModule
    ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatDialogModule
  ],
  providers: [MembersService, BooksService, DVDService, AddMemberService, AddBookService, AddDVDService, DeleteBookService, DeleteDVDService, BorrowBookService, BorrowDVDService, ReturnBookService, ReturnDVDService, ReserveBookService, ReserveDVDService],
  bootstrap: [AppComponent],
  entryComponents: [ReserveDialogComponent, ReturnFineDialogComponent]
})
export class AppModule { }
