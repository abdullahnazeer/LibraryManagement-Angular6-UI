import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DVD } from './dvd.model';
import { DVDService } from '../dvd.service';
import { AddDVDService } from '../addDVD.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-add-dvd',
  templateUrl: './add-dvd.component.html',
  styleUrls: ['./add-dvd.component.css']
})
export class AddDVDComponent implements OnInit {

  constructor(private dvdService: DVDService, private addDVDService: AddDVDService) { }

  ngOnInit() {
  }

  onAddDVD(form: NgForm){

    if (form.valid){
      const value = form.value;
      const newDVD = new DVD(value.ISBN, value.title, value.sector, value.publicationDate, null, value.languages, value.subtitles, value.producer, value.actors, null);
      this.dvdService.addDVD(newDVD);
      this.addDVDService.storeServers(newDVD).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );
    this.addDVDService.storeDVD(newDVD).subscribe(
      (response :Response) => {
        console.log(response);
      }
    );
    }
    
  }

}
