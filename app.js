// Define the game as a function
const game = () => {
  // Initialize the player and computer scores to zero
  let pScore = 0;
  let cScore = 0;
  
  // Function to start the game
  const startGame = () => {
    // Get the play button, intro screen, and match screen from the HTML
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    // Add an event listener to the play button to start the game
    playBtn.addEventListener("click", () => {
      // Add a fade out animation to the intro screen and a fade in animation to the match screen
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // Function to play the match
  const playMatch = () => {
    // Get the options, player hand, computer hand, and hand images from the HTML
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    // Add an event listener to each hand image to remove the animation when it ends
    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    
    // Define the computer's options
    const computerOptions = ["rock", "paper", "scissors"];

    // Add an event listener to each option button to play the game
    options.forEach(option => {
      option.addEventListener("click", function() {
        // Generate a random number to choose the computer's option
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        // Set a timeout to display the hands and compare the choices after the animations end
        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        
        // Add a shaking animation to the hands
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  // Function to update the score
  const updateScore = () => {
    // Get the player score and computer score from the HTML and update them
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  // Function to compare the hands
  const compareHands = (playerChoice, computerChoice) => {
    // Get the winner element from the HTML
    const winner = document.querySelector(".winner");

    // Check if there is a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    // Check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    
    // Check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++

          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
    };
  
    
    startGame();
    playMatch();
  };
  
  
  game();