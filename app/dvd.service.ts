import { DVD } from "./add-dvd/dvd.model";

export class DVDService {
    private dvds: DVD[] = [];

    addDVD(dvdInfo: DVD){
        this.dvds.push(dvdInfo);
    }

    getDVDs(): DVD[]{
        return [...this.dvds];
    }

    getDVDsList(){
        return this.dvds.slice();
    }

    setDVDs(dvds: DVD[]){
        this.dvds = dvds;
    }
}