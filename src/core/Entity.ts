import { Vector3D } from "./vector3-d";
export abstract class Entity {
    protected id: string;
    protected position: Vector3D;
    protected age: number;
    protected isAlive: boolean;
    protected energy: number;
    protected maxEnergy: number;

    constructor(id: string, position: Vector3D){
        this.id=id;
        this.position=position;
        this.age=0;
        this.isAlive=true;
        this.energy=5;
        this.maxEnergy=100;
    }

    // Méthodes abstraites
    //abstract update(deltaTime: number): void;
    //abstract render(): void;
    
    // Méthodes publiques
    getId(): string{return this.id;}
    getPosition(): Vector3D{return this.position;}
    setPosition(position: Vector3D): void{this.position=position;}
    getAge(): number{return this.age;}
    setAge(age: number): void{this.age=age;}
    isEntityAlive(): boolean{return this.isAlive;}
    kill(): void{this.energy=0;}
    getEnergy(): number{return this.energy;}
    getMaxEnergy(): number{return this.maxEnergy;}
    addEnergy(amount: number): void{
        if(amount+this.energy <= this.maxEnergy){
            this.energy+=amount;
        }
        else{
            this.energy+= this.maxEnergy - amount;
        }
    }
    consumeEnergy(amount: number): void{this.energy-=amount;}
    setEnergy(amount: number): void{this.energy=amount;}
}