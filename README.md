🐍 Snake Game

A simple and fun Snake Game built with HTML, CSS, and JavaScript.
Playable on both desktop and mobile devices with touch controls.

🎮 Features

Snake grows when it eats food 🍎

Food is drawn as a circle, snake’s head as an ellipse, and tail as a triangle 🎨

Score and High Score tracking (saved in browser’s local storage)

Restart button appears after game over

Sound effects for eating and game over 🔊

Touch controls for mobile 📱

Gradual speed increase:

Starts at 350ms per move

Decreases by 2ms every food eaten

Stops at 100ms minimum

📂 Project Structure
Snake-Game/
│
├── index.html       # Main game file
├── sw.js            # Service worker for PWA (offline support)
├── manifest.json    # PWA manifest (for mobile installable app)
├
├── eat.mp3      # Sound when snake eats food
└── gameover.mp3 # Sound when game is over
└── README.md        # This file

🚀 How to Run Locally

Clone this repository:

git clone https://github.com/your-username/snake_game.git
cd snake_game


Start a simple Python HTTP server (to avoid CORS issues with audio & PWA):

# Python 3
python -m http.server 8000


Then open http://localhost:8000
 in your browser.

Play the game 🎉
