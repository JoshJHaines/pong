// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector(".computer-paddle");

// Get the Ball paddle element
const ball = document.querySelector(".ball");

// Initial computer paddle y-position and y-velocity
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// Initial BALL Y position and Velocity
let ballYPosition = 0;
let ballYVelocity = 1;

// Initial BALL X position and Velocity
let ballXPosition = 0;
let ballXVelocity = 1;

// Update the pong world
function update() {
	// Update the computer paddle's position
	computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

	// Update the BALL 's position
	ballYPosition = ballYPosition + ballYVelocity;
	ballXPosition = ballXPosition + ballXVelocity;

	// If the computer paddle goes off the edge of the screen, bring it back
	computerPaddleYPosition =
		computerPaddleYPosition % (GAME_AREA_HEIGHT - PADDLE_HEIGHT);

	// If the computer paddle goes off the edge of the screen, bring it back
	ballYPosition = ballYPosition % (GAME_AREA_HEIGHT - BALL_SIZE);
	ballXPosition = ballXPosition % (GAME_AREA_WIDTH - BALL_SIZE);

	// Apply the y-position
	computerPaddle.style.top = `${computerPaddleYPosition}px`;

	// Apply the BALL position
	ball.style.top = `${ballYPosition}px`;
	ball.style.left = `${ballXPosition}px`;
}

// Call the update() function everytime the browser is ready to re-render
function loop() {
	update();
	window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
