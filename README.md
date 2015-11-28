# Game of Evolution

This is a fork of the [original](https://github.com/J3RN/game-of-evolution) Game of Evolution created by j3rn.

The intention of this fork is to graduallly increase the complexity and accuracy of the game as it pertains to evolutionary biology in the natural world.

*Live demo coming soon.*

## Running
- Simply open `index.html` in your browser.

## Rules

### Individuals

- Individuals mate asexually.
- When reproducing, the offspring can appear on any of the four spaces around the parent, top, right, bottom, or left.
- Offspring have a copy of their parent's DNA, with a %1 chance of a random mutation.
- Individuals who do not eat after 25 turns (2.5 seconds) die of starvation.
- Individuals have a maximum lifespan (10 seconds).
- Individuals can eat any other individuals, in accordance with their DNA.
- Individuals have a size (0 - 5, inclusive). Individuals can only eat other individuals that are smaller than them.
    - TODO: Hitpoints?

### Game

- The game will end only by one of the following:
    - All individuals are dead
    - The "Reset" button is pressed
- The game starts with 5000 individuals

## Development

The game code is in four files:
- `js/game.js`
- `js/creature.js`
- `js/dna.js`
- `js/inspect.js`

There is also `js/canvas_adapter.js`, but it should not need to be modified other than for performance reasons.

### `game.js`

- Should contain all non-creature game logic
- Creates the board
- Creates individuals and places them on the board
- Redraws the game
- Restarts the game when it is "over", as defined above

### `creature.js`

- All creature behavior
- Creature configuration (lifespan, starvation)

### `dna.js`

- Handles creation of DNA
- Handles copying of DNA

### `inspect.js`

- Handles the mouse-over action of showing the creature's DNA
