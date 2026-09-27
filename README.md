# Tic Tac Toe

## Project Overview

This is a browser-based Tic Tac Toe game with a modern 3D visual style. The game is played by two players who take turns marking spaces on a 3×3 grid. The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the game. If all nine spaces are filled without a winner, the game results in a draw.

## Features

- **Two-Player Gameplay** – Players alternate turns, with one player as "Akash" and the other as "Sagar"
- **Winner Detection** – Automatically detects when a player has won and displays the winner
- **Draw Detection** – Identifies when all squares are filled with no winner
- **Reset Game** – Reset button to clear the board and start a new game
- **Interactive Game Board** – Click any empty square to make your move
- **3D Visual Style** – Modern, stylized board with 3D depth effects and hover animations
- **Responsive Design** – Clean, centered layout that works on various screen sizes

## Technologies Used

- **HTML** – Structure and layout of the game interface
- **CSS** – Styling with 3D effects, gradients, and animations
- **JavaScript** – Game logic, win detection, and player interaction handling

## Project Structure

```
tic-tok-toe/
├── Tic Tok game/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── LICENSE
```

## How to Run

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Akashathani03/tic-tok-toe.git
   ```

2. Navigate to the project directory:
   ```bash
   cd tic-tok-toe
   ```

3. Open the game in your browser:
   - Navigate to the `Tic Tok game` folder
   - Double-click `index.html` to open it in your default browser
   - Or right-click `index.html` and select "Open with" to choose a specific browser

## How to Play

1. The game starts with an empty 3×3 grid
2. Player 1 (Akash) goes first, followed by Player 2 (Sagar)
3. On each turn, click an empty square to place your mark
4. The first player to get three marks in a row (horizontal, vertical, or diagonal) wins
5. If all nine squares are filled without a winner, the game ends in a draw
6. Click the **Reset Game** button to clear the board and start over

## Future Improvements

The following features are not currently implemented but could be added in future versions:

- Single-player mode with AI opponent
- Difficulty levels for AI
- Score tracking across multiple games
- Game timer or move limit
- Sound effects and animations for moves
- Customizable player names
- Move history/undo functionality
- Local storage to save game state

## Author

**Akashathani03**

---

Licensed under the [MIT License](LICENSE)
