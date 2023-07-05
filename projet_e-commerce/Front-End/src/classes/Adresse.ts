import {Client} from '../classes/Client';

export class Adresse {

    id:number;
    numero:number;
    rue:string;
    complement:string;
    cp:string;
    ville:string;
    version?:number;
}