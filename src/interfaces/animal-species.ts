import { DietType } from "../enums/diet-type";
import { SocialType } from "../enums/social-type";

export interface AnimalSpecies {
    name: string;
    diet: DietType;
    maxSpeed: number;
    energyConsumption: number;
    reproductionThreshold: number;
    lifespan: number;
    socialBehavior: SocialType;
    maxOffspring: number;
    gestationTime: number;
}