const participants_Buttun_Left = document.querySelector(
  ".participants__switch__button_left"
);
const participants_Buttun_Right = document.querySelector(
  ".participants__switch__button_right"
);
const participants_Buttun_Left_mobile = document.querySelector(
  ".participants__switch__button_left_mobile"
);
const participants_Buttun_Right_mobile = document.querySelector(
  ".participants__switch__button_right_mobile"
);
const number_Of_Participants_mobile = document.querySelector(
  ".participants__switch__number_of_participants_mobile"
);
const stages_mobail_Buttun_Left = document.querySelector(
  ".stages__switch__mobail__button_left"
);
const mobile_Buttun_Right = document.querySelector(
  ".stages__switch__mobail__button_right"
);
const window_Participants = document.querySelector(
  ".participants__all_participants"
);
const number_Of_Participants = document.querySelector(
  ".participants__switch__number_of_participants"
);
const stages_switch_mobail_button_right = document.querySelector(
  ".stages__switch__mobail__button_right"
);
const stages_switch_mobail_button_left = document.querySelector(
  ".stages__switch__mobail__button_left"
);
const stages_cards = document.querySelector(".stages__cards");
const stages_switch_number = document.querySelector(".stages__switch__number");

let switch_elips;
let pozshen = 0;
let pozshen_mobile = 0;
let stages_pozshen = 0;
let col = 3;
let col_mobile = 1;
let col_stages = [1, 1, 1, 1, 1];
let click_stages = 0;
number_Of_Participants.innerHTML = `${col}/6`;
number_Of_Participants_mobile.innerHTML = `${col_mobile}/6`;

window.addEventListener("resize", () => {
  pozshen = 0;
  pozshen_mobile = 0;
  col = 3;
  col_mobile = 1;
  window_Participants.style.right = 0;
  number_Of_Participants.innerHTML = `${3}/6`;
  number_Of_Participants_mobile.innerHTML = `${1}/6`;
});

participants_Buttun_Right.onclick = () => {
  if (pozshen < 900) {
    pozshen += 414;
    window_Participants.style.right = pozshen + "px";
    number_Of_Participants.innerHTML = `${(col += 1)}/6`;
    participants_Buttun_Left.classList.remove("disabled");
    if (col === 6) {
      participants_Buttun_Right.classList.add("disabled");
    }
  } else {
  }
};
participants_Buttun_Left.onclick = () => {
  if (pozshen > 0) {
    pozshen += -414;
    window_Participants.style.right = pozshen + "px";
    number_Of_Participants.innerHTML = `${(col -= 1)}/6`;
    participants_Buttun_Right.classList.remove("disabled");
    if (col === 3) {
      participants_Buttun_Left.classList.add("disabled");
    }
  }
};

participants_Buttun_Right_mobile.onclick = () => {
  if (pozshen_mobile < 1700) {
    pozshen_mobile += 414;
    window_Participants.style.right = pozshen_mobile + "px";
    number_Of_Participants_mobile.innerHTML = `${(col_mobile += 1)}/6`;
    participants_Buttun_Left_mobile.classList.remove("disabled");
    if (col_mobile === 6) {
      participants_Buttun_Right_mobile.classList.add("disabled");
    }
  }
};
participants_Buttun_Left_mobile.onclick = () => {
  if (pozshen_mobile > 0) {
    pozshen_mobile += -414;
    window_Participants.style.right = pozshen_mobile + "px";
    number_Of_Participants_mobile.innerHTML = `${(col_mobile -= 1)}/6`;
    participants_Buttun_Right_mobile.classList.remove("disabled");
    if (col_mobile === 1) {
      participants_Buttun_Left_mobile.classList.add("disabled");
    }
  }
};
setInterval(() => {
  if (window.innerWidth < 1365) {
    if (pozshen_mobile >= 1700) {
      pozshen_mobile = 0;
      col_mobile = 1;
      window_Participants.style.right = 0 + "px";
      number_Of_Participants_mobile.innerHTML = `${1}/6`;
    } else {
      pozshen_mobile += 414;
      window_Participants.style.right = pozshen_mobile + "px";
      number_Of_Participants_mobile.innerHTML = `${(col_mobile += 1)}/6`;
    }
  } else {
    if (pozshen >= 1200) {
      pozshen = 0;
      col = 3;
      window_Participants.style.right = 0 + "px";
      number_Of_Participants.innerHTML = `${3}/6`;
    } else {
      pozshen += 414;
      window_Participants.style.right = pozshen + "px";
      number_Of_Participants.innerHTML = `${(col += 1)}/6`;
    }
  }
}, 4000);

for (let i = 0; i < col_stages.length; i++) {
  if (col_stages[i] === 1) {
    col_stages[i] = document.createElement("div");
    col_stages[i].classList.add("switch_elips");
  }
  stages_switch_number.appendChild(col_stages[i]);
  col_stages[0].classList.add("switch_elips_click");

  stages_switch_mobail_button_right.onclick = () => {
    if (stages_pozshen < 1400) {
      stages_pozshen += 355;
      stages_cards.style.right = stages_pozshen + "px";
      click_stages += 1;
      col_stages[click_stages].classList.add("switch_elips_click");
      col_stages[click_stages - 1].classList.remove("switch_elips_click");
    }
  };
  stages_switch_mobail_button_left.onclick = () => {
  if (stages_pozshen > 0) {
    stages_pozshen += -355;
    stages_cards.style.right = stages_pozshen + "px";
    click_stages -= 1;
    col_stages[click_stages].classList.add("switch_elips_click");
      col_stages[click_stages + 1].classList.remove("switch_elips_click");
    
  }
};
}


