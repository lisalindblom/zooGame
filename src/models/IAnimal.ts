export interface IAnimals {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  isFed: boolean;
  lastFed: string;
  lastFedTime?: number;
  timeBetweenFeeding: number;
  isClean: boolean;
  lastCleaned?: number;
  needWater: boolean;
  lastWaterRefill?: number;
}
