export type Species = 'chien' | 'chat' | 'poisson' | 'lapin';

export interface IPet {
  id: number;
  name: string;
  species: Species;
  price: number;
  isAvailable: boolean;
}
