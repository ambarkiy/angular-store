import { Address } from './address';
import { OpeningTime } from './opening-time';

export interface Store {
    brand: string;
    logo: string;
    phone: string;
    address: Address;
    openingTime: OpeningTime
}