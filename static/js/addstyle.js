const style = document.createElement("style");
style.textContent = `



@keyframes colorwheel {
  0% {
    filter: hue-rotate(0deg) contrast(90%) saturate(100%);
  }
  50% {
    filter: hue-rotate(1080deg) contrast(260%) saturate(300%);
  }
  100% {
    filter: hue-rotate(0deg) contrast(90%) saturate(100%);
  }
}
.colorclass {
  animation: colorwheel 10s ease;
}

.simplehuechange {
  filter: hue-rotate(180deg);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg) scale(0.5);
  }
  100% {
    transform: rotate(720deg);
  }
}
.spinclass {
  animation: spin 10s ease;
}

.modifiedtext {
  color: rgb(0, 57, 148);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 100px;
  text-decoration: underline;
}

.modifiedtext:hover {
  color: red;
  font-weight: bold;
}

body.darkmode {
  filter: invert(1) hue-rotate(180deg);
}

body {
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  gap: 10px;
}

.square {
  height: 300px;
  width: 300px;
}/*# sourceMappingURL=main.css.map */



`;
document.head.appendChild(style);
