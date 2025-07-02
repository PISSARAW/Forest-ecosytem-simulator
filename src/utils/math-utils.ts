export class MathUtils {
    // Méthodes statiques utilitaires
    static clamp(value: number, min: number, max: number): number;
    static lerp(a: number, b: number, t: number): number;
    static randomRange(min: number, max: number): number;
    static randomInt(min: number, max: number): number;
    static randomBool(probability?: number): boolean;
    static randomChoice<T>(array: T[]): T;
    static distance2D(x1: number, z1: number, x2: number, z2: number): number;
    static angle2D(x1: number, z1: number, x2: number, z2: number): number;
    static normalizeAngle(angle: number): number;
    static degreesToRadians(degrees: number): number;
    static radiansToDegrees(radians: number): number;
    static isPowerOfTwo(value: number): boolean;
    static nextPowerOfTwo(value: number): number;
}
