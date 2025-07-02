import { Entity } from "../core/Entity";
import { Season } from "../enums/season";

export class Tree extends Entity {
    private species: TreeSpecies;
    private height: number;
    private trunkDiameter: number;
    private leafMass: number;
    private fruitCount: number;
    private season: Season;
    private isOnFire: boolean;
    private diseaseResistance: number;

    constructor(id: string, position: Vector3D, species: TreeSpecies);

    // Méthodes publiques
    update(deltaTime: number): void;
    render(): void;
    getSpecies(): TreeSpecies;
    getHeight(): number;
    getTrunkDiameter(): number;
    getLeafMass(): number;
    getFruitCount(): number;
    getSeason(): Season;
    setSeason(season: Season): void;
    getAvailableFood(): number;
    consumeFood(amount: number): number;
    produceFruit(deltaTime: number): void;
    ignite(): void;
    extinguish(): void;
    isTreeOnFire(): boolean;
    getDiseaseResistance(): number;
    infectWithDisease(disease: Disease): void;
    
    // Méthodes privées
    private grow(deltaTime: number): void;
    private getGrowthModifier(): number;
    private updateSeasonalEffects(): void;
    private processFireDamage(deltaTime: number): void;
    private processDiseaseEffects(deltaTime: number): void;
}
