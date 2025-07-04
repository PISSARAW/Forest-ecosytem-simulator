import { Entity } from "../core/Entity";
import { Season } from "../enums/season";
import { TreeSpecies } from "../interfaces/tree-species";
import { Vector3D } from "../core/vector3-d";

export class Tree extends Entity {
  private species: TreeSpecies;
  private height: number;
  private trunkDiameter: number;
  private leafMass: number;
  private fruitCount: number;
  private season: Season;
  private isOnFire: boolean;

  constructor(id: string, position: Vector3D, species: TreeSpecies) {
    super(id, position);
    this.species = species;
    this.height = 1; // en mètres
    this.trunkDiameter = 0.1; // en mètres
    this.leafMass = 0.5; // kg
    this.fruitCount = 0;
    this.season = Season.SPRING;
    this.isOnFire = false;
  }

  update(deltaTime: number): void {
    if (!this.isEntityAlive()) return;

    this.age += deltaTime;
    this.updateSeasonalEffects();
    this.grow(deltaTime);
    this.produceFruit(deltaTime);

    if (this.isOnFire) {
      this.processFireDamage(deltaTime);
    }

    if (this.age > this.species.lifespan) {
      this.kill();
    }
  }

  render(): void {
  }

  getSpecies(): TreeSpecies {
    return this.species;
  }

  getHeight(): number {
    return this.height;
  }

  getTrunkDiameter(): number {
    return this.trunkDiameter;
  }

  getLeafMass(): number {
    return this.leafMass;
  }

  getFruitCount(): number {
    return this.fruitCount;
  }

  getSeason(): Season {
    return this.season;
  }

  setSeason(season: Season): void {
    this.season = season;
  }

  getAvailableFood(): number {
    return this.fruitCount;
  }

  consumeFood(amount: number): number {
    const eaten = Math.min(amount, this.fruitCount);
    this.fruitCount -= eaten;
    return eaten;
  }

  produceFruit(deltaTime: number): void {
    if (this.season === Season.SUMMER || this.season === Season.AUTUMN) {
      this.fruitCount += this.getGrowthModifier() * deltaTime * 2;
      this.fruitCount = Math.min(this.fruitCount, this.species.fruitProduction);
    }
  }

  ignite(): void {
    this.isOnFire = true;
  }

  extinguish(): void {
    this.isOnFire = false;
  }

  isTreeOnFire(): boolean {
    return this.isOnFire;
  }

  private grow(deltaTime: number): void {
    const modifier = this.getGrowthModifier();
    this.height += modifier * deltaTime * this.species.growthRate;
    this.trunkDiameter += modifier * deltaTime * 0.01;
    this.leafMass += modifier * deltaTime * 0.05;
  }

  private getGrowthModifier(): number {
    switch (this.season) {
      case Season.SPRING:
        return 1.2;
      case Season.SUMMER:
        return 1.0;
      case Season.AUTUMN:
        return 0.5;
      case Season.WINTER:
        return 0.1;
      default:
        return 1;
    }
  }

  private updateSeasonalEffects(): void {
    if (this.season === Season.WINTER) {
      this.leafMass *= 0.95; 
    }
  }

  private processFireDamage(deltaTime: number): void {
    this.leafMass -= deltaTime * 2;
    this.trunkDiameter -= deltaTime * 0.05;
    this.fruitCount -= deltaTime * 5;
    this.energy -= deltaTime * 10;

    if (this.energy <= 0 || this.trunkDiameter <= 0.05) {
      this.kill();
    }
  }
}
