import {Round} from './model/round';
import {chunk, rotateArray, shuffle} from "./util/array-utils";
import {Match} from "./model/match";
import {smallestCoprime} from "./util/math-utils";

export interface RoundOptions {
    teamSize: number;
    numberOfRounds: number;
    shuffle?: boolean;
}

export class Tournament {

    static generate<T>(players: Array<T>, options: RoundOptions): Array<Round<T>> {
        if(options.shuffle) players = shuffle(players);
        let rounds = new Array<Round<T>>();
        for(let i = 0; i < options.numberOfRounds; i++) {
            rounds.push(this.generateRound(i, players, options));
        }
        return rounds;
    }

    private static generateRound<T>(roundNumber: number, players: Array<T>, options: RoundOptions): Round<T> {
        const rotations = smallestCoprime(players.length, options.teamSize);
        const rotatedPlayers = rotateArray(players, roundNumber * rotations);
        const playersPerMatch = 2*options.teamSize;
        const numberOfMatches = Math.floor(rotatedPlayers.length/playersPerMatch);
        const activePlayers = rotatedPlayers.slice(0, numberOfMatches * playersPerMatch);
        const idlePlayers = rotatedPlayers.slice(numberOfMatches * playersPerMatch);
        const matches = chunk(activePlayers, playersPerMatch)
            .map(rotatedPlayers => ({
                teamA: rotatedPlayers.slice(0,  options.teamSize),
                teamB: rotatedPlayers.slice(options.teamSize)
            } as Match<T>));

        return {
            idlePlayers,
            matches
        }
    }
}

