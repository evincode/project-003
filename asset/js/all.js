window.onload = function() {
    const imageElement = document.querySelector('.img-animate');
    if (imageElement) {
      const handleMouseMove = (e) => {
        let rect = imageElement.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let dx = (x - rect.width / 3) / (rect.width / 3);
        let dy = (y - rect.height / 3) / (rect.height / 3);

        imageElement.style.transform = `perspective(500px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg)`;
      };

      const handleMouseLeave = () => {
        imageElement.style.transform = "";
      };

      imageElement.addEventListener('mousemove', handleMouseMove);
      imageElement.addEventListener('mouseleave', handleMouseLeave);
    }
  }