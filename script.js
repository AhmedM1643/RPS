console.log("Alo");
let title = document.querySelector(".title");
let rockButton = document.querySelector(".rock-button");
let paperButton = document.querySelector(".paper-button");
let scissorsButton = document.querySelector(".scissors-button");
let rockComp = document.querySelector(".rock-comp")
let paperComp = document.querySelector(".paper-comp")
let scissorsComp = document.querySelector(".scissors-comp")
let usable = true;
let state = "";
let compState = "";

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


function check() {
    if (state === compState) {
        title.innerHTML = "Drawn.";
        setTimeout(() => {title.innerHTML = "Drawn.."}, 2000)
        setTimeout(() => {title.innerHTML = "Drawn..."}, 2500)
        setTimeout(() => {location.reload()}, 3000)
    } else if (state === "rock" && compState === "paper") {
        title.innerHTML = "Computer Won.";
        setTimeout(() => {title.innerHTML = "Computer Won.."}, 2000)
        setTimeout(() => {title.innerHTML = "Computer Won..."}, 2500)
        setTimeout(() => {location.reload()}, 3000)
    } else if (state === "rock" && compState === "scissors") {
        title.innerHTML = "You Won.";
        setTimeout(() => {title.innerHTML = "You Won.."}, 2000)
        setTimeout(() => {title.innerHTML = "You Won..."}, 2500)
        setTimeout(() => {location.reload()}, 3000)
    } else if (state === "paper" && compState === "rock") {
        title.innerHTML = "You Won.";
        setTimeout(() => {title.innerHTML = "You Won.."}, 2000)
        setTimeout(() => {title.innerHTML = "You Won..."}, 2500)
        setTimeout(() => {location.reload()}, 3000)
    } else if (state === "paper" && compState === "scissors") {
        title.innerHTML = "Computer Won.";
        setTimeout(() => {title.innerHTML = "Computer Won.."}, 2000)
        setTimeout(() => {title.innerHTML = "Computer Won..."}, 2500)
        setTimeout(() => {location.reload()}, 3000)
    } else if (state === "scissors" && compState === "rock") {
        title.innerHTML = "Computer Won.";
        setTimeout(() => {title.innerHTML = "Computer Won.."}, 2000)
        setTimeout(() => {title.innerHTML = "Computer Won..."}, 2500)
        setTimeout(() => {location.reload()}, 3000)
    } else if (state === "scissors" && compState === "paper") {
        title.innerHTML = "You Won.";
        setTimeout(() => {title.innerHTML = "You Won.."}, 2000)
        setTimeout(() => {title.innerHTML = "You Won..."}, 2500)
        setTimeout(() => {location.reload()}, 3000)
    }
}

function computerChoose() {
    console.log(state)
    console.log(title)
    setTimeout(() => {    title.innerHTML = "Computer Thinking...";}, 1000)
    let choose = random(0,3);
    if (choose === 0) {
        setTimeout(() => {
            scissorsComp.remove();
            paperComp.remove();
            rockComp.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`
            compState = "rock";
            check()
        }, 2500)
    }
    if (choose === 1) {
        console.log("Computer Choosed Paper")
        setTimeout(() => {
            scissorsComp.remove();
            rockComp.remove();
            paperComp.innerHTML = `<i class="fa-solid fa-hand"></i>`
            compState = "paper"
            check()
        }, 2500)
    }
    if (choose === 2) {
        console.log("Computer Choosed Scissors")
        setTimeout(() => {
            paperComp.remove();
            rockComp.remove();
            scissorsComp.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`
            compState = "scissors"
            check()
        }, 2500)
    }
}

rockButton.addEventListener("click", () => {
    if (usable === true) {
        console.log("rock")
        paperButton.remove();
        scissorsButton.remove();
        title.innerHTML = `You Choosed Rock`;
        title.classList.add("text-warning", "text-bold");
        state = "rock";
        computerChoose()
        usable = false;
    }

})

paperButton.addEventListener("click", () => {
    if (usable === true) {
        console.log("paper")
        rockButton.remove();
        scissorsButton.remove();
        title.innerHTML = `You Choosed Paper`
        title.classList.add("text-danger", "text-bold");
        state = "paper";
        computerChoose()
        usable = false;
    }

})

scissorsButton.addEventListener("click", () => {
    if (usable === true) {
        console.log("scissors")
        rockButton.remove();
        paperButton.remove();
        title.innerHTML = `You Choosed Scissors`
        title.classList.add("text-primary", "text-bold");
        state = "scissors"
        computerChoose()
        usable = false;
    }

})