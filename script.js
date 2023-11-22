document.addEventListener('DOMContentLoaded', function () {
  let isDragging = false;
  let previousX;

  const cube = document.getElementById('cube');

  document.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousX = e.clientX;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - previousX;
    previousX = e.clientX;

    cube.style.transform = `rotateX(45deg) rotateY(45deg) translateZ(200px) rotateY(${deltaX / 5}deg)`;
  });

  // Prevent text selection during dragging
  document.addEventListener('selectstart', function (e) {
    if (isDragging) {
      e.preventDefault();
      return false;
    }
  });
});
