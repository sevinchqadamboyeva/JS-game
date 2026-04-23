
const button = document.querySelector(".btn");
const first_player_img = document.querySelector(".first_player");
const second_player_img = document.querySelector(".second_player");
const result = document.querySelector(".result");

result.textContent = "you are first player. Click the button to start a game!"

button.addEventListener("click", () => {
  const first_random_number = Math.round(Math.random() * 2);
  const second_random_number = Math.round(Math.random() * 2);

  if (first_random_number == 0) {
    first_player_img.setAttribute('src', './img/paper.jpg')
  } else if (first_random_number == 1) {
    first_player_img.setAttribute('src', './img/rock.jpg')
  } else {
    first_player_img.setAttribute('src', './img/scissors.jpg')
  }


  if (second_random_number == 0) {
    second_player_img.setAttribute('src', './img/paper.jpg')
  } else if (second_random_number == 1) {
    second_player_img.setAttribute('src', './img/rock.jpg')
  } else {
    second_player_img.setAttribute('src', './img/scissors.jpg')
  }

  if(first_random_number == 0 && second_random_number == 1) {
    result.textContent = "you won!";
    result.style.color = "green";
  } else if (first_random_number == 1 && second_random_number == 2) {
    result.textContent = "you won!";
    result.style.color = "green";
  } else if (first_random_number == 2 && second_random_number == 0) {
    result.textContent = "you won!";
    result.style.color = "green";
  }

  else if (first_random_number == second_random_number) {
     result.textContent = "draw";
     result.style.color = "blue";
  }

else {
  result.textContent = "you lost";
  result.style.color = "red";
}


})















