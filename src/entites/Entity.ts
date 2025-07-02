import * as THREE from 'three';
export abstract class Entity{
    protected id:string;
    protected position:THREE.Vector3;
    protected age:number;
    protected isAlive:boolean;

    constructor(id:string, position:THREE.Vector3){
        this.id=id;
        this.position=position;
        this.age=0;
        this.isAlive=true;
    }

    getId():string{
        return this.id;
    }

    getPosition():THREE.Vector3{
        return this.position;
    }

    getAge():number{
        return this.age;
    }

    isEntityAlive():boolean{
        return this.isAlive;
    }
}