

    // 获取全屏div元素
    const fullscreenDiv = document.getElementById('canvas');

    // 监听窗口大小变化事件
    window.addEventListener('resize', () => {
        // 设置div元素的宽度和高度为窗口的宽度和高度
        fullscreenDiv.style.width = window.innerWidth + 'px';
        fullscreenDiv.style.height = window.innerHeight + 'px';
        console.log('123')
    });

    // 初始化时设置div元素的宽度和高度为窗口的宽度和高度
    fullscreenDiv.style.width = window.innerWidth + 'px';
    fullscreenDiv.style.height = window.innerHeight + 'px';

    var canvas = document.getElementById('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var particles = [];

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    setInterval(() => {
        var particle = {
            x: Math.floor(Math.random() * screenWidth),
            y: Math.floor(Math.random() * screenHeight),
            vx: Math.random() * 4 - 2,
            vy: Math.random() * -10,
            color: 'hsl(' + Math.random() * 360 + ', 100%, 50%)'
        };

        particles.push(particle);
    },100);
    // canvas.addEventListener('click', function(event) {
    //
    // });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < particles.length; i++) {
        var particle = particles[i];

        particle.vy += 0.2;
        particle.x += particle.vx;
        particle.y += particle.vy;

        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 5, 0, 2 * Math.PI);
        ctx.fill();

        if (particle.y > canvas.height) {
          particles.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animate);
    }

    // 开始动画循环
    animate();
