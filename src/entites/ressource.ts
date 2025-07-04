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

  constructor(id: string, position: Vector3D, type: ResourceType, quantity: number) {
    super(id, position);
    this.type = type;
    this.quantity = quantity;
    this.maxQuantity = quantity;
    this.renewalRate = this.calculateRenewalRate();
    this.decayRate = this.calculateDecayRate();
    this.nutritionalValue = this.calculateNutritionalValue();
    this.sourceEntity = null;
  }

  update(deltaTime: number): void {
    if (!this.isEntityAlive()) return;

    this.renew(deltaTime);
    this.decay(deltaTime);

    this.nutritionalValue = this.calculateNutritionalValue();

    if (this.quantity <= 0) {
      this.kill();
    }
  }

  render(): void {
    // Hook d'affichage (ex. : rendu Angular ou Three.js)
  }

  getType(): ResourceType {
    return this.type;
  }

  getNutritionalValue(): number {
    return this.nutritionalValue;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getMaxQuantity(): number {
    return this.maxQuantity;
  }

  setSourceEntity(entity: Entity): void {
    this.sourceEntity = entity;
  }

  getSourceEntity(): Entity | null {
    return this.sourceEntity;
  }

  consume(amount: number): number {
    if (this.quantity - amount > 0) {
      this.quantity -= amount;
      return this.quantity;
    } else {
      this.quantity = 0;
      return 0;
    }
  }

  replenish(amount: number): void {
    this.quantity = Math.min(this.quantity + amount, this.maxQuantity);
  }

  private renew(deltaTime: number): void {
    const growth = this.renewalRate * deltaTime;
    this.replenish(growth);
  }

  private decay(deltaTime: number): void {
    const loss = this.decayRate * deltaTime;
    this.quantity = Math.max(0, this.quantity - loss);
  }

  private calculateNutritionalValue(): number {
    switch (this.type) {
      case ResourceType.FRUIT:
        return 4 + Math.min(this.quantity / 10, 2); // sucré, riche
      case ResourceType.SEED:
        return 2 + Math.min(this.quantity / 20, 1); // modéré
      case ResourceType.WATER:
        return 1; // hydrate uniquement
      case ResourceType.MINERAL:
        return 0.5; // peu nutritif, mais utile à d'autres fins
      case ResourceType.NECTAR:
        return 3; // très énergétique pour insectes
      default:
        return 2;
    }
  }

  private calculateRenewalRate(): number {
    switch (this.type) {
      case ResourceType.FRUIT:
        return 1; // pousse naturellement
      case ResourceType.SEED:
        return 0.3; // plus lent
      case ResourceType.WATER:
        return 0.5; // nappe phréatique ou pluie
      case ResourceType.MINERAL:
        return 0; // non renouvelable
      case ResourceType.NECTAR:
        return 0.8; // régulier
      default:
        return 0;
    }
  }

  private calculateDecayRate(): number {
    switch (this.type) {
      case ResourceType.FRUIT:
      case ResourceType.NECTAR:
        return 0.5; // périssable
      case ResourceType.SEED:
        return 0.1; // stable
      case ResourceType.WATER:
        return 0.2; // évaporation
      case ResourceType.MINERAL:
        return 0; // permanent
      default:
        return 0.1;
    }
  }
}
