import {Tournament} from "./tournament";

describe('tournament', () => {

    it('should generate the correct number of rounds', () => {
        const playersStrings = [
            'Timo',
            'Manon',
            'Piet',
            'Henk',
            'Klaas',
            'Dick',
            'Jan',
            'Martijn'
        ];

        const rounds = Tournament.generate(playersStrings, {
            teamSize: 1,
            numberOfRounds: 3
        });

        expect(rounds).toHaveLength(3);
    });

    it('should not have idlePlayers if no players are left', () => {
        const playersStrings = [
            'Timo',
            'Manon',
            'Piet',
            'Henk',
            'Klaas',
            'Dick',
            'Jan',
            'Peter',
        ];

        const rounds = Tournament.generate(playersStrings, {
            teamSize: 1,
            numberOfRounds: 3
        });

        expect(rounds).toHaveLength(3);
        rounds
            .forEach(round => expect(round.idlePlayers).toHaveLength(0))
    });

    it('should have idlePlayers if a match cannot be filled', () => {
        const playersStrings = [
            'Timo',
            'Manon',
            'Piet',
            'Henk',
            'Klaas',
            'Dick',
            'Jan',
        ];

        const rounds = Tournament.generate(playersStrings, {
            teamSize: 2,
            numberOfRounds: 3
        });

        rounds
            .map(round => round.idlePlayers)
            .forEach(idle => expect(idle).toHaveLength(3));
    });

    it('should return matches with the specified number of players in each team', () => {
        const playersStrings = [
            'Timo',
            'Manon',
            'Piet',
            'Henk',
            'Klaas',
            'Dick',
            'Jan',
            'Peter',
        ];

        const rounds = Tournament.generate(playersStrings, {
            teamSize: 2,
            numberOfRounds: 3
        });

        rounds
            .flatMap(round => round.matches)
            .forEach(match => {
                expect(match.teamA).toHaveLength(2);
                expect(match.teamB).toHaveLength(2);
            })
    });
});