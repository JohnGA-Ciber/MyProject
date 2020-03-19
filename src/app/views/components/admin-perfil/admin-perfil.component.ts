import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AuthService } from "../../../share/services/auth.service";
import { DataP } from '../../../share/interfaces/DataP.interface';


@Component({
  selector: 'app-admin-perfil',
  templateUrl: './admin-perfil.component.html',
  styleUrls: ['./admin-perfil.component.scss'],
})
export class AdminPerfilComponent implements OnInit {

  displayedColumns: string[] = ['email', 'uid', 'username'];
  dataSource = new MatTableDataSource<DataP>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor( private auth: AuthService){

  }

  ngOnInit() {
    this.auth.getAll().subscribe(res => {
      this.dataSource.data = res;
    })
  }
  
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  
  logout(){
    this.auth.doLogout();
  }


}
