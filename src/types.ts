interface NameUrlPair {
  name: string;
  url: string;
}

export interface Ability {
  ability: NameUrlPair;
  is_hidden: boolean;
  slot: number;
}

interface Item {
  item: NameUrlPair;
}

export interface Move {
  move: NameUrlPair;
}

interface SimpleSprite {
  front_shiny: string;
  front_default: string;
  front_female: string;
  back_default: string;
}

interface Sprites extends SimpleSprite {
  other: OtherSprites;
}

interface OtherSprites {
   dream_world: SimpleSprite;
  'official-artwork': SimpleSprite;
}

interface TypeOfPokemon {
  type: NameUrlPair;
}

 export interface PokemonColor {
  color: NameUrlPair;
}

export interface Pokemon {
  color: PokemonColor ;
  abilities: Ability[];
  base_experience: number;
  forms: NameUrlPair[];
  height: number;
  held_items: Item[];
  id: number;
  moves: Move[];
  name: string;
  species: NameUrlPair;
  sprites: Sprites;
  types: TypeOfPokemon[];
  weight: number;
}
