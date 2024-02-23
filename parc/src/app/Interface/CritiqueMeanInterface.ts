import {CritiqueInterface} from "./critique.interface";

export interface CritiqueMeanInterface {
  critiques: CritiqueInterface[] | undefined;
  mean: number | undefined;
}
