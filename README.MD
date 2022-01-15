# Round-Robin tournament generator
This is a simple typescript implementation of the Round-robin tournament algorithm as found on https://en.wikipedia.org/wiki/Round-robin_tournament.

## Quickstart
Install the library:

`npm install round-robin-tournament`

## Usage
Use `Tournament.generate()` to generate a new tournament. Any array can be used as input for the tournament, the contents do not matter.

## Example
```
const playersStrings = [
    'John',
    'Paul',
    'Foo',
    'Bar'
];

const tournament = Tournament.generate(playersStrings, {
      teamSize: 2 // The number of players per team in a single match
      numberOfRounds: 3 // The number of unique rounds that should be generated
});
```