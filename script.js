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

	// If the BALL goes off the TOP or BOTTOM edge of the screen, bounce it back
    if (ballYPosition >= (GAME_AREA_HEIGHT - BALL_SIZE)){
        ballYVelocity = ballYVelocity * -1
    } else if (ballYPosition <= 0){
        ballYVelocity = ballYVelocity * -1
    }

    // If the BALL goes off the LEFT or RIGHT edge of the screen, bounce it back
    if (ballXPosition >= (GAME_AREA_WIDTH - BALL_SIZE)){
        ballXVelocity = ballXVelocity * -1
    } else if (ballXPosition <= 0){
        ballXVelocity = ballXVelocity * -1
    }

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
