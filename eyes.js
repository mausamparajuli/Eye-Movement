const balls = document.getElementsByClassName('ball');

// for loop was created
for (var i = 0; i < 2; i++) {
  document.onmousemove = (event) => {
    const x = (event.clientX * 100) / window.innerWidth + '%';
    const y = (event.clientY * 100) / window.innerHeight + '%';

    balls[0].style.left = x;
    balls[0].style.top = y;
    balls[0].transform = 'translate(-' + x + ',-' + y + ')';

    balls[1].style.left = x;
    balls[1].style.top = y;
    balls[1].transform = 'translate(-' + x + ',-' + y + ')';
  };
}