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
  addition?: Vector3D;
  substraction?: Vector3D;
  multiply?: Vector3D;
  divide?: Vector3D;
  cross?: Vector3D;
  normalize?: Vector3D;
  equal?:boolean;
  dotProduct?: number;
  constructor(){
    this.v1 = new Vector3D(0,0,0);
    this.v2 = new Vector3D(0,0,0);
  }
  regenerate():void{
    const rng1 = new RandomGenerator(Date.now());
    const rng2 = new RandomGenerator(Date.now() + 1000);
    this.v1 = rng1.randomVector3D(1,100,1,100,1,100);
    this.v2 = rng2.randomVector3D(1,100,1,100,1,100);
      
    this.addition = this.v1.add(this.v2);
    this.substraction = this.v1.subtract(this.v2);
    this.dotProduct = this.v1.dot(this.v2);
    this.multiply = this.v1.multiply(5);
    this.divide = this.v1.divide(5);
    this.cross = this.v1.cross(this.v2);
    this.normalize = this.v1.normalize();
    this.equal = this.v1.equals(this.v2);
  }
}
