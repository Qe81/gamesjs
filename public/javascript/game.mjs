import { addClass, removeClass } from "./help1.mjs";
import { createUserContainer, createText,  } from "./Help2.mjs";



const username = sessionStorage.getItem("username");

if (!username) {
  window.location.replace("/login");
}

const socket= io("http://localhost:3002/game");

let members = [];

const userList = document.getElementById('user-list');
const gameArea = document.getElementById('game-area');
const readyButton = document.getElementById("game-text");



const clearGameUserList = () => {
  while (userList.firstChild) {
    userList.firstChild.remove();
  };
};



const fillGameUserList = () => {
  members.forEach(member => {
    const userContainer = createUserContainer(member);
    userList.append(userContainer);
  }); 
};

const clearTimer = () => {
  const gameTimerSpan = document.getElementById("game-timer");
  gameArea.removeChild(gameTimerSpan);
};

const startGame = ({gamers}) => {
  const gameTextElement = document.getElementById("game-text");
  const gamer = gamers.find(gamer => gamer.username === username);
  const { gameText } = gamer;
  const v = createText(gameText);
  gameTextElement.replaceWith(v);
  isGameStarted = true;
};

const updateReadyButton = () => {
  readyButton.textContent == 'READY' ? readyButton.textContent = 'NOT READY' : readyButton.textContent = 'READY';
};


const updateUsersList = roomMembers => {
  members = roomMembers;
  clearGameUserList();
  fillGameUserList();
}

const socket = io("", { query: { username } });

socket.on('UPDATE_USER_LIST', updateUsersList);
socket.on('START_GAME', startGame);
socket.on('UPDATE_READY_BUTTON', updateReadyButton);

readyButton.addEventListener('click', onUpdateUserStatusInRoom);
