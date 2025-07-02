import { Vector3D } from '../core/vector3-d';
import { Animal } from './animal';
import { AnimalSpecies, dummies } from "../interfaces/animal-species";


describe('Animal', () => {
  it('should create an instance', () => {
    expect(new Animal("1",new Vector3D(0,0,0),dummies)).toBeTruthy();
  });
});
