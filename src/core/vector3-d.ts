export class Vector3D {
    constructor(public x: number, public y: number, public  z: number){}
    
    // Méthodes de calcul vectoriel
    add(other: Vector3D): Vector3D{
        return new Vector3D(this.x+other.x, this.y+other.y, this.z+other.z);
    }
    subtract(other: Vector3D): Vector3D{
        return new Vector3D(this.x-other.x, this.y-other.y, this.z-other.z);
    }
    multiply(scalar: number): Vector3D{
        return new Vector3D(scalar*this.x, scalar*this.y, scalar*this.z);
    }
    divide(scalar: number): Vector3D{
        return new Vector3D(this.x/scalar, this.y/scalar, this.z/scalar);
    }
    dot(other: Vector3D): number{
        return this.x*other.x+this.y*other.y+this.z*other.z;
    }
    cross(other: Vector3D): Vector3D{
        return new Vector3D(this.y*other.z-this.z*other.y, this.z*other.x-this.x*other.z, this.x*other.y-this.y*other.x);
    }
    magnitude(): number{
        return Math.sqrt(this.x**2+ this.y**2 + this.z**2);
    }
    normalize(): Vector3D{
        const mag = this.magnitude();
        return mag===0? new Vector3D(0,0,0) : this.divide(mag);
    }
    distanceTo(other: Vector3D): number{
        return Math.pow(this.x-other.x, 2) + Math.pow(this.y-other.y, 2) + Math.pow(this.z-other.z, 2) ;
    }
    clone(): Vector3D{
        return new Vector3D(this.x, this.y, this.z);
    }
    equals(other: Vector3D): boolean{
        return this.x==other.x && this.y==other.y && this.z==other.z;
    }
    toString(): string{
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
    toArray():[number, number, number]{
        return [this.x, this.y, this.z];
    }
    static fromArray(arr:[number, number, number]):Vector3D{
        return new Vector3D(arr[0], arr[1], arr[2]);
    }

}
