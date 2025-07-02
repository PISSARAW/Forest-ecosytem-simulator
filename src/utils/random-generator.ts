import { Vector3D } from "../core/vector3-d";
export class RandomGenerator {
    private seed: number;
    private state: number;

    constructor(seed?: number){
        this.seed = seed ? seed : 0;
        this.state=0;
    }

    // Méthodes publiques
    setSeed(seed: number): void{this.seed=seed;}
    getSeed(): number{return this.seed;}
    random(): number;
    randomRange(min: number, max: number): number;
    randomInt(min: number, max: number): number;
    randomBool(probability?: number): boolean;
    randomChoice<T>(array: T[]): T;
    randomGaussian(mean?: number, stdDev?: number): number;
    randomVector3D(minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number): Vector3D;
    
    // Méthodes privées
    private next(): number;
    private boxMuller(): number;
}