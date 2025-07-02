import { Entity } from "../core/Entity";
import { Vector3D } from "../core/vector3-d";

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
    }

    // Méthodes publiques
    update(deltaTime: number): void;
    render(): void;
    getType(): ResourceType;
    getNutritionalValue(): number;
    getQuantity(): number;
    getMaxQuantity(): number;
    setSourceEntity(entity: Entity): void;
    getSourceEntity(): Entity | null;
    consume(amount: number): number;
    replenish(amount: number): void;
    
    // Méthodes privées
    private renew(deltaTime: number): void;
    private decay(deltaTime: number): void;
    private calculateNutritionalValue(): number;
    private calculateRenewalRate(): number;
}