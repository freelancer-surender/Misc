var bridge = document.getElementById("bridge"),
  bridgeCanvas = bridge.getContext("2d"),
  img = new Image();

img.onload = function () {
  bridgeCanvas.drawImage(img, 0, 0, bridge.width, bridge.height);
};
img.src = "before.png";

function performMagic(e) {
  var brushPos = getBrushPos(e.clientX, e.clientY);
  if (e.buttons === 1) {
    paint(brushPos.x, brushPos.y);
  }
}

function getBrushPos(xRef, yRef) {
  var bridgeRect = bridge.getBoundingClientRect();
  return {
    x: Math.floor(
      ((xRef - bridgeRect.left) / (bridgeRect.right - bridgeRect.left)) *
        bridge.width
    ),
    y: Math.floor(
      ((yRef - bridgeRect.top) / (bridgeRect.bottom - bridgeRect.top)) *
        bridge.height
    ),
  };
}

function paint(mouseX, mouseY) {
  bridgeCanvas.beginPath();
  bridgeCanvas.arc(mouseX, mouseY, 15, 0, 2 * Math.PI, true);
  bridgeCanvas.globalCompositeOperation = "destination-out";
  bridgeCanvas.fill();
}


