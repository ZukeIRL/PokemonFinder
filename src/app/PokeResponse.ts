export interface PokeResponse{
    [x: string]: any;
    list:results[];

    results:{
        pokemon_id:number;
        pokemon_name:string;
        base_attack:number;
        base_defense:number;
        base_stamina:number;
    }[];
}
export interface results{
    pokemon_id:number;
    pokemon_name:string;
    base_attack:number;
    base_defense:number;
    base_stamina:number;
}

export class Pokemon implements results{

    pokemon_id:number;
    pokemon_name:string;
    base_attack:number;
    base_defense:number;
    base_stamina:number;

    constructor(_id:number, _name:string, _atk:number, _def:number, _stam:number) {

        _id = this.pokemon_id;
        _name = this.pokemon_name;
        _atk = this.base_attack;
        _def = this.base_defense;
        _stam = this.base_stamina;

    }

}