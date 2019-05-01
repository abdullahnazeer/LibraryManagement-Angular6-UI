import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBookComponent } from './add-book/add-book.component';
import { AddDVDComponent } from './add-dvd/add-dvd.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { DeleteDVDComponent } from './delete-dvd/delete-dvd.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { ReturnDVDComponent } from './return-dvd/return-dvd.component';
import { DisplayMembersComponent } from './display-members/display-members.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { DisplayDVDsComponent } from './display-dvds/display-dvds.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { BorrowDVDComponent } from './borrow-dvd/borrow-dvd.component';
import { DeleteMemberComponent } from './delete-member/delete-member.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { GenerateReportDVDComponent } from './generate-report-dvd/generate-report-dvd.component';
import { ReserveBookComponent } from './reserve-book/reserve-book.component';
import { ReserveDVDComponent } from './reserve-dvd/reserve-dvd.component';

const routes: Routes = [
  { path: 'add-book', component: AddBookComponent},
  { path: 'add-dvd', component: AddDVDComponent},
  { path: 'delete-book', component: DeleteBookComponent},
  { path: 'delete-dvd', component: DeleteDVDComponent},
  { path: 'add-member', component: AddMemberComponent},
  { path: 'borrow-book', component: BorrowBookComponent},
  { path: 'borrow-dvd', component: BorrowDVDComponent},
  { path: 'return-book', component: ReturnBookComponent},
  { path: 'return-dvd', component: ReturnDVDComponent},
  { path: 'display-members', component: DisplayMembersComponent},
  { path: 'display-books', component: DisplayBooksComponent},
  { path: 'display-dvds', component: DisplayDVDsComponent},
  { path: 'delete-member', component: DeleteMemberComponent},
  { path: 'generate-report', component: GenerateReportComponent},
  { path: 'generate-report-dvd', component: GenerateReportDVDComponent},
  { path: 'reserve-book', component: ReserveBookComponent},
  { path: 'reserve-dvd', component: ReserveDVDComponent},
  { path: '**', redirectTo: '/add-book', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
