import { Entity } from "../core/Entity";
import { AnimalBehavior } from "../enums/animal-behavior";
import { Vector3D } from "../core/vector3-d";
import { AnimalSpecies } from "../interfaces/animal-species";

type Gender = "Male" | "Female";

export class Animal extends Entity {
    private species: AnimalSpecies;
    private velocity: Vector3D;
    private hunger: number;
    private reproductiveUrge: number;
    private currentBehavior: AnimalBehavior;
    private target?: Entity | null;
    private gender: Gender;
    private size: number;
    private maxSpeed: number;
    private socialGroup: Animal[];
    private lastReproduction: number;

    constructor(id: string, position: Vector3D, species: AnimalSpecies){
        super(id, position);
        this.reproductiveUrge = 5;
        this.species= species;
        this.currentBehavior = AnimalBehavior.WANDERING;
        this.size = 5;
        this.maxSpeed = 20;
        this.socialGroup = [];
        this.lastReproduction = 5;
        this.velocity=position;
        this.gender= "Male";
        this.hunger=0;
        this.target = null;
    }

    // Méthodes publiques
    //update(deltaTime: number): void;
    //render(): void;
    getSpecies(): AnimalSpecies{return this.species;}
    getVelocity(): Vector3D{return this.velocity;}
    setVelocity(velocity: Vector3D): void{this.velocity=velocity;}
    getHunger(): number{return this.hunger;}
    getReproductiveUrge(): number{return this.reproductiveUrge;}
    getCurrentBehavior(): AnimalBehavior{return this.currentBehavior;}
    setCurrentBehavior(behavior: AnimalBehavior): void{this.currentBehavior=behavior;}
    getTarget(): Entity | null{return this.target ? this.target : null;}
    setTarget(target: Entity | null): void{this.target=target;}
    getGender(): Gender{return this.gender;}
    getSize(): number{return this.size;}
    getMaxSpeed(): number{return this.maxSpeed;}
    getSocialGroup(): Animal[]{return this.socialGroup;}
    addToSocialGroup(animal: Animal): void{this.socialGroup.push(animal);}
    removeFromSocialGroup(animal: Animal): void{this.socialGroup = this.socialGroup.filter(an => an !== animal);}
    isReadyToReproduce(): boolean{ return this.reproductiveUrge==20;}
    resetReproductiveCycle(): void{this.reproductiveUrge=0;}
    //getMaxConsumption(): number;
    //getReachDistance(): number;
    //reduceHunger(amount: number): void;
    //takeDamage(damage: number): void;
    //getMaxHealth(): number;
    //setTraits(traits: any): void;
    
    // Méthodes privées
    //private updateNeeds(deltaTime: number): void;
    //private decideBehavior(): void;
    //private executeBehavior(deltaTime: number): void;
    //private move(deltaTime: number): void;
    //private checkSurvival(): void;
    //private findFood(): Entity | null;
    //private findMate(): Animal | null;
    //private flee(threat: Entity): void;
    //private wander(): void;
    //private rest(): void;
}