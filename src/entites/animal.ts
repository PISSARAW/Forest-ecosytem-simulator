import { Entity } from "../core/Entity";
import { AnimalBehavior } from "../enums/animal-behavior";
import { Vector3D } from "../core/vector3-d";
import { AnimalSpecies } from "../interfaces/animal-species";
import { MathUtils } from "../utils/math-utils";

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
    private currentHealth:number;
    private maxHealth:number;

    constructor(id: string, position: Vector3D, species: AnimalSpecies){
        super(id, position);
        this.reproductiveUrge = species.reproductionThreshold;
        this.species= species;
        this.currentBehavior = AnimalBehavior.WANDERING;
        this.size = 5;
        this.maxSpeed = species.maxSpeed;
        this.socialGroup = [];
        this.lastReproduction = 5;
        this.velocity=new Vector3D(0,0,0);
        this.gender= "Male";
        this.hunger=0;
        this.target = null;
        this.currentHealth = 100;
        this.maxHealth = 100;
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
    getMaxConsumption(): number {return this.species.energyConsumption;}
    getReachDistance(): number {return this.size * 2; }
    reduceHunger(amount: number): void {this.hunger = Math.max(0, this.hunger - amount);}
    takeDamage(damage: number): void {
        this.currentHealth -= damage;
        if (this.currentHealth <= 0) {
          this.kill();
        }
      }  
    getMaxHealth(): number {
        return this.maxHealth;
    }
      
    
    // Méthodes privées
    private updateNeeds(deltaTime: number): void{
        this.hunger+=deltaTime*0.1;
        this.reproductiveUrge = Math.min(this.reproductiveUrge+deltaTime*0.05, 20);
        this.age+=deltaTime;
        this.consumeEnergy(this.species.energyConsumption*deltaTime);
    }
    private decideBehavior(): void{
        if(this.hunger>10)
            this.currentBehavior = AnimalBehavior.SEEKING_FOOD;
        else if(this.reproductiveUrge>=20)
            this.currentBehavior = AnimalBehavior.SEEKING_MATE;
        else if(this.energy<10)
            this.currentBehavior = AnimalBehavior.RESTING;
        else
            this.currentBehavior = AnimalBehavior.WANDERING;
    }
    private executeBehavior(deltaTime: number): void{
        switch(this.currentBehavior){
            case AnimalBehavior.FLEEING:
                if(this.target) this.flee(this.target);
                break;
            case AnimalBehavior.SEEKING_FOOD:
                this.findFood();
                break;
            case AnimalBehavior.RESTING:
                this.rest();
                break;
            case AnimalBehavior.WANDERING:
                default:
                    this.wander();
                    break;
            case AnimalBehavior.SEEKING_MATE:
                this.findMate();
                break;
        }
        this.move(deltaTime);
    }
    private move(deltaTime: number): void{
        const cappedVelocity = this.velocity.multiply(this.maxSpeed*deltaTime);
        this.position=this.position.add(cappedVelocity);
    }
    private checkSurvival(): void{
        if(this.energy<=0||this.age>=this.species.lifespan){
            this.kill;
        }
    }
    private findFood(): Entity | null{
        this.velocity = new Vector3D(1,0,0);
        return null;
    }
    private findMate(): Animal | null{
        this.velocity = new Vector3D(0,1,0);
        return null;
    }
    private flee(threat: Entity): void{
        const dir = this.position.subtract(threat.getPosition()).normalize();
        this.velocity = dir.multiply(this.maxSpeed);
    }
    private wander(): void{
        const dx = (MathUtils.randomInt(0.5, 2));
        const dy = (MathUtils.randomInt(0.5, 2));
        const dz = (MathUtils.randomInt(0.5, 2));
        this.velocity = new Vector3D(dx, dy, dx).normalize().multiply(this.maxSpeed);
    }
    private rest(): void{
        this.velocity = new Vector3D(0,0,0);
        this.addEnergy(0.2);
    }
}