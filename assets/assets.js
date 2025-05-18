  const ornamentContainer = document.querySelector('.ornaments');
  for (let i = 0; i < 50; i++) {
      const el = document.createElement('div');
      el.className = 'ornament';
      el.style.left = Math.random() * 100 + 'vw';
      el.style.animationDuration = 2 + Math.random() * 10 + 's';
      el.style.background = `radial-gradient(circle, hsl(${Math.random() * 360}, 100%, 85%) 40%, transparent 40%)`;
      document.querySelector('.ornaments').appendChild(el);
  }


  const container = document.getElementById('floating-container');

  // Ganti dengan nama file gambar kamu yang ada di folder assets/foto
  const images = [
    'assets/foto/nisahjb1.jpg',
    'assets/foto/nisahjb2.jpg',
    'assets/foto/nisahjb3.jpg',
    'assets/foto/nisahjb4.jpg',
    'assets/foto/nisahjb5.jpg'
  ];

  function spawnFloatingImage() {
    const img = document.createElement('img');
    const randomImage = images[Math.floor(Math.random() * images.length)];
    img.src = randomImage;
    img.className = 'floating-image';
    img.style.left = `${Math.random() * 100}%`;
    img.style.width = `${50 + Math.random() * 50}px`; // ukuran acak 50-100px

    container.appendChild(img);

    setTimeout(() => {
      container.removeChild(img);
    }, 6000);
  }

  // Munculkan gambar baru setiap 400ms
  setInterval(spawnFloatingImage, 400);