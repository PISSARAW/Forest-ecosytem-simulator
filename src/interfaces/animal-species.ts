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

export const dummies:AnimalSpecies = {
    name : "Reptile",
    diet : DietType.CARNIVORE,
    maxSpeed : 50,
    energyConsumption : 5,
    lifespan : 150,
    socialBehavior : SocialType.SOLITARY,
    maxOffspring : 5,
    gestationTime : 15,
    reproductionThreshold : 10
}