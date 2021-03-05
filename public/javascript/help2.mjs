import { createElement } from "./help1.mjs";

export const createUserContainer = (member) => {
    const { username, isReady } = member;
  
    const container = createElement({
      tagName: "div",
      className: "user-container"
    });
  
    const status = createElement({
      tagName: "div",
      className: `status + ${isReady ? " ready" : ""}`
    });
  
    const nameArea = createElement({
      tagName: "div",
      className: "name-area"
    });
  
    const progressBar = createElement({
      tagName: "div",
      className: "progress-bar"
    });
  
    const progressBarValue = createElement({
      tagName: "div",
      className: "progress-bar-value",
      attributes: { id: username }
    });
  
    const userName = document.createTextNode(username);
    nameArea.append(userName);
    progressBar.append(progressBarValue);
    container.append(status);
    container.append(nameArea);
    container.append(progressBar);
  
    return container;
  };
  
  export const createTimerText = value => {
    const p = createElement({ tagName: "p", attributes: { id: 'game-text' } });
    const text = document.createTextNode(value);
    p.append(text);
    return p;
  }
  
  export const createText = gameText => {
    const p = createElement({ tagName: "p", attributes: { id: 'game-text' } });
    const text = document.createTextNode(gameText);
    p.append(text);
    return p;
  }
  

  
 