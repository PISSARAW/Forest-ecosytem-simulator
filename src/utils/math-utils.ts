import { RandomGenerator } from "./random-generator";
export class MathUtils {
    // Méthodes statiques utilitaires
    static clamp(value: number, min: number, max: number): number{return Math.max(min, Math.min(max, value));
}
    static lerp(a: number, b: number, t: number): number{return a + (b - a) * t;}
    static randomRange(min: number, max: number): number{
        return (new RandomGenerator).randomRange(min, max);
    }
    static randomInt(min: number, max: number): number{
        return (new RandomGenerator).randomInt(min, max);
    }
    static randomBool(probability?: number): boolean{
        return (new RandomGenerator).randomBool(probability);
    }
    static randomChoice<T>(array: T[]): T{
        return (new RandomGenerator).randomChoice(array);
    }
    //static distance2D(x1: number, z1: number, x2: number, z2: number): number;
    //static angle2D(x1: number, z1: number, x2: number, z2: number): number;
    //static normalizeAngle(angle: number): number;
    //static degreesToRadians(degrees: number): number;
    //static radiansToDegrees(radians: number): number;
    //static isPowerOfTwo(value: number): boolean;
    //static nextPowerOfTwo(value: number): number;
}
