import { Ocjena } from './ocjenaInterface';
import { RecenzijaInterface } from './rezencijaInterface';


export interface ProductInterface {
  id: number;
  name: string;
  processor: string;
  RAM: number;
  SSD: number;
  operatingSystem: string;
  graphics: string;
  price: number;
  image: string;
  ocjene: number[];
  favorite: boolean;
  recenzije: RecenzijaInterface[];
  isDisabled: boolean;
}
