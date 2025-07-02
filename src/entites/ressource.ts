import { Entity } from "../core/Entity";
import { Vector3D } from "../core/vector3-d";
import { ResourceType } from "../enums/ressource-type";

export class Resource extends Entity {
    private type: ResourceType;
    private nutritionalValue: number;
    private quantity: number;
    private renewalRate: number;
    private sourceEntity: Entity | null;
    private maxQuantity: number;
    private decayRate: number;

    constructor(id: string, position: Vector3D, type: ResourceType, quantity: number){
        super(id, position);
        this.type = type;
        this.quantity=quantity;
        this.renewalRate = 0;
        this.maxQuantity=quantity;
        this.decayRate=0;
        this.nutritionalValue = 2;
        this.sourceEntity = null;
    }

    // Méthodes publiques
    //update(deltaTime: number): void;
    //render(): void;
    getType(): ResourceType{return this.type;}
    getNutritionalValue(): number{return this.nutritionalValue;}
    getQuantity(): number{return this.quantity;}
    getMaxQuantity(): number{return this.maxQuantity;}
    setSourceEntity(entity: Entity): void{this.sourceEntity=entity;}
    getSourceEntity(): Entity | null{return this.sourceEntity ? this.sourceEntity : null;}
    consume(amount: number): number{if(this.quantity-amount>0){this.quantity-=amount; return this.quantity;}else{return 0;}}
    replenish(amount: number): void{if(this.quantity+amount<this.maxQuantity){this.quantity+=amount;}else{this.quantity+=this.maxQuantity-amount;}}
    
    // Méthodes privées
    //private renew(deltaTime: number): void;
    //private decay(deltaTime: number): void;
    //private calculateNutritionalValue(): number;
    //private calculateRenewalRate(): number;
}