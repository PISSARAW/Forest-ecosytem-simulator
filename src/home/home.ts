import { Component } from '@angular/core';
import { Vector3D } from '../core/vector3-d';
import { RandomGenerator } from '../utils/random-generator';

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
    this.v1=(new RandomGenerator(5)).randomVector3D(1,100,1,100,1,100);
    this.v2=(new RandomGenerator(9)).randomVector3D(1,100,1,100,1,100);
  }
}
