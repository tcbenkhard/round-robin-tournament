import {Match} from "./match";

export interface Round<T> {
    idlePlayers: Array<T>;
    matches: Array<Match<T>>;
}