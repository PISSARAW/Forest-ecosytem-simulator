export class Vector3D {
    constructor(public x: number, public y: number, public  z: number){}
    
    // Méthodes de calcul vectoriel
    add(other: Vector3D): Vector3D{
        return other;
    }
    subtract(other: Vector3D): Vector3D{
        return other;
    }
    multiply(scalar: number): Vector3D{
        return this;
    }
    divide(scalar: number): Vector3D{
        return this;
    }
    dot(other: Vector3D): number{
        return 0;
    }
    cross(other: Vector3D): Vector3D{
        return other;
    }
    magnitude(): number{
        return 0;
    }
    normalize(): Vector3D{
        return this;
    }
    distanceTo(other: Vector3D): number{
        return other.x;
    }
    clone(): Vector3D{
        return this;
    }
    equals(other: Vector3D): boolean{
        return false;
    }
    toString(): string{
        return "other";
    }
}
