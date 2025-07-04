import { array } from "three/tsl";
import { Vector3D } from "../core/vector3-d";
export class RandomGenerator {
    private seed: number = Date.now();
    private state: number | null = null;
    

    constructor(seed?: number){
        this.seed = seed ?? Date.now();
        this.state=null;
    }

    // Méthodes publiques
    setSeed(seed: number): void{this.seed=seed;}
    getSeed(): number{return this.seed;}
    random(): number{return this.next();}
    randomRange(min: number, max: number): number{return this.randomInt(min, max);}
    randomInt(min: number, max: number): number{return Math.floor(this.random() * (max - min + 1)) + min;}
    randomBool(probability: number=0.5): boolean{return this.random() < probability;}
    randomChoice<T>(array: T[]): T{return array[this.randomInt(0, array.length-1)];}
    randomGaussian(mean: number=0, stdDev: number=1): number{return this.boxMuller() * stdDev + mean;}
    randomVector3D(minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number): Vector3D{
        return new Vector3D(this.randomInt(minX, maxX), this.randomInt(minY, maxY), this.randomInt(minZ, maxZ));
    }
    randomVector3DRange(min:Vector3D, max:Vector3D):Vector3D{
        return new Vector3D(
            this.randomInt(min.x, max.x),
            this.randomInt(min.y, max.y),
            this.randomInt(min.z, max.z)
        );
    }
    
    // Méthodes privées
    private next(): number{
        let t = this.seed += 0x6D2B79F5;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }

    private boxMuller(): number{
        if (this.state !== null) {
            const value = this.state;
            this.state = null;
            return value;
        }
        let u: number, v: number, s: number;
        do {
            u = this.random() * 2 - 1;
            v = this.random() * 2 - 1;
            s = u * u + v * v;
        } while (s >= 1 || s === 0);
        const mul = Math.sqrt(-2.0 * Math.log(s) / s);
        this.state = v * mul;
        return u * mul;
    }

    shuffle<T>(array: T[]):T[]{
        const result = [...array];
        for(let i = result.length -1;i>0; i--){
            const j = this.randomInt(0,i);
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }

    randomSign():number{
        return this.randomBool()?1:-1;
    }
}