function animateBox(day) {
    const animatedBox = document.getElementById('animated-box');
    const button = document.getElementById(day);
    const color = button.getAttribute('data-color');

    animatedBox.style.backgroundColor = color;
    animatedBox.style.transform = 'translateY(0)';
    animatedBox.style.opacity = '1';

    setTimeout(() => {
        animatedBox.style.transform = 'translateY(-100%)';
        animatedBox.style.opacity = '0';
    }, 1000); 
}
