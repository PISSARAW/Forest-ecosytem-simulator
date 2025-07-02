import { Component } from '@angular/core';
import { Vector3D } from '../core/vector3-d';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  v1:Vector3D;
  v2:Vector3D;

  constructor(){
    this.v1=new Vector3D(5,2,9);
    this.v2=new Vector3D(3,8,4);
  }
}
