export class Animal extends Entity {
    private species: AnimalSpecies;
    private velocity: Vector3D;
    private hunger: number;
    private reproductiveUrge: number;
    private currentBehavior: AnimalBehavior;
    private target: Entity | null;
    private gender: Gender;
    private size: number;
    private maxSpeed: number;
    private socialGroup: Animal[];
    private lastReproduction: number;

    constructor(id: string, position: Vector3D, species: AnimalSpecies);

    // Méthodes publiques
    update(deltaTime: number): void;
    render(): void;
    getSpecies(): AnimalSpecies;
    getVelocity(): Vector3D;
    setVelocity(velocity: Vector3D): void;
    getHunger(): number;
    getReproductiveUrge(): number;
    getCurrentBehavior(): AnimalBehavior;
    setCurrentBehavior(behavior: AnimalBehavior): void;
    getTarget(): Entity | null;
    setTarget(target: Entity | null): void;
    getGender(): Gender;
    getSize(): number;
    getMaxSpeed(): number;
    getSocialGroup(): Animal[];
    addToSocialGroup(animal: Animal): void;
    removeFromSocialGroup(animal: Animal): void;
    isReadyToReproduce(): boolean;
    resetReproductiveCycle(): void;
    getMaxConsumption(): number;
    getReachDistance(): number;
    reduceHunger(amount: number): void;
    takeDamage(damage: number): void;
    getMaxHealth(): number;
    setTraits(traits: any): void;
    
    // Méthodes privées
    private updateNeeds(deltaTime: number): void;
    private decideBehavior(): void;
    private executeBehavior(deltaTime: number): void;
    private move(deltaTime: number): void;
    private checkSurvival(): void;
    private findFood(): Entity | null;
    private findMate(): Animal | null;
    private flee(threat: Entity): void;
    private wander(): void;
    private rest(): void;
}