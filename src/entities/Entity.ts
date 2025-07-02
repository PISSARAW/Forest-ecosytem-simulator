abstract class Entity{
    protected id:string;
    protected position: Vector3D;
    protected age:number;
    protected isAlive:boolean;

    constructor(id:string, position:Vector3D);
    abstract update(deltaTime:number)this.void;

    getID():string;
    getPosition():Vector3D;
    getAge():number;
    isEntityAlive():boolean;
}