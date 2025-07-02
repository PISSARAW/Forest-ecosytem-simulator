import { Entity } from "../core/Entity";

export class Forest {
    private width: number;
    private height: number;
    private entities: Map<string, Entity>;
    private terrain: TerrainData[][];
    private weatherSystem: WeatherSystem;
    private fireSystem: FireSystem;
    private diseaseSystem: DiseaseSystem;

    constructor(width: number, height: number){
        this.width=width;
        this.height=height;
        this.entities = new Map<string, Entity>();
    }

    // Méthodes publiques
    addEntity(entity: Entity): void;
    removeEntity(id: string): void;
    getEntity(id: string): Entity | undefined;
    getAllEntities(): Entity[];
    getEntitiesInArea(topLeft: Vector3D, bottomRight: Vector3D): Entity[];
    isPositionSafe(position: Vector3D): boolean;
    isPositionValid(position: Vector3D): boolean;
    getTerrainHeight(x: number, z: number): number;
    getWeatherSystem(): WeatherSystem;
    getFireSystem(): FireSystem;
    getDiseaseSystem(): DiseaseSystem;
    update(deltaTime: number): void;
    
    // Méthodes privées
    private generateTerrain(): void;
    private updateEnvironmentalSystems(deltaTime: number): void;
    private checkEntityBounds(entity: Entity): boolean;
}