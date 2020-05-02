import { Component, OnInit,HostBinding,Input} from '@angular/core';
import { Cliente,tableData} from '../../models/UserData';

@Component({
  selector: 'app-reg-tabla',
  templateUrl: './reg-tabla.component.html',
  styleUrls: ['./reg-tabla.component.css']
})
export class RegTablaComponent implements OnInit {


  @HostBinding('class') classes ='row-fluid';
  @Input() clientes:Cliente[];
  @Input() cabeceraTabla:tableData[];

  bolPrueba:boolean =  true;


  numeros: number[] =[0,1,2,3,4,5,6,7,8,9];
  constructor() { }

  ngOnInit(): void {
  }

}
