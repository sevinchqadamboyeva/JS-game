
const button = document.querySelector(".btn");
const first_player_img = document.querySelector(".first_player");
const second_player_img = document.querySelector(".second_player");
const btn = document.querySelector(".result");

button.addEventListener("click", () => {
    const first_random_number = Math.round(Math.random() * 2);
      const second_random_number = Math.round(Math.random() * 2);
    })


    if(first_random_number == 0) {
      first_player_img.setAttribute('src', './img/paper.png')
    }else if(first_random_number == 1) {
      first_player_img.setAttribute('src', './img/rock.png')
    }else{
       first_player_img.setAttribute('src', './img/scissors.png')
    }


    if(second_random_number == 0) {
      second_player_img.setAttribute('src', './img/paper.png')
    }else if(second_random_number == 1) {
      second_player_img.setAttribute('src', './img/rock.png')
    }else{
       second_player_img.setAttribute('src', './img/scissors.png')
    }














