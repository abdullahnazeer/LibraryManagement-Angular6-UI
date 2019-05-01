import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeleteDVDService } from '../deleteDVD.service';
import { DVD } from '../add-dvd/dvd.model';
import { DVDService } from '../dvd.service';

@Component({
  selector: 'app-delete-dvd',
  templateUrl: './delete-dvd.component.html',
  styleUrls: ['./delete-dvd.component.css']
})
export class DeleteDVDComponent implements OnInit {

  constructor(private deleteDVDService: DeleteDVDService, private dvdService: DVDService) { }

  ngOnInit() {
  }

  private dvds: DVD[] = this.dvdService.getDVDs();

  onDeleteDVD(form: NgForm){

    if (form.valid){
      const value = form.value;
      const dvd = new DVD(value.ISBN, null, null, null, null, null, null, null, null, null);
      this.deleteDVDService.storeServers(dvd).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );
      const index = this.dvds.findIndex(dvd => dvd.ISBN === value.ISBN);
      this.dvds.splice(index, 1);
      this.dvdService.setDVDs(this.dvds);
    }
    }
    
  }

