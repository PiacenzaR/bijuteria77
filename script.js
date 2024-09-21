
const naoButton = document.getElementById('nao');


naoButton.addEventListener('mouseover', function() {
  const container = document.querySelector('.container');

 
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  
  const randomX = Math.random() * (containerWidth - naoButton.offsetWidth);
  const randomY = Math.random() * (containerHeight - naoButton.offsetHeight);

  
  naoButton.style.position = 'absolute';
  naoButton.style.left = `${randomX}px`;
  naoButton.style.top = `${randomY}px`;
});


document.getElementById('sim').addEventListener('click', function() {

    const audio = new Audio("Tribalistas - Velha Infância (mp3cut.net).mp3")
    audio.play();

  alert("Sabia que você diria sim! 💖 Clique OK para continuar! ");
  createHearts();
});


function createHearts() {
  const heartContainer = document.getElementById('heartContainer');

  
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`; 
    heart.style.animationDelay = `${Math.random() * 2}s`; 

    heartContainer.appendChild(heart);

    
    setTimeout(() => {
      heart.remove();
    }, 4000); 
  }
}

document.getElementById('sim').addEventListener('click', function() {
  
  if (confirm('Você realmente quer sair comigo?')) {
    
    fetch('https://seu-servidor.com/enviar-email', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        resposta: 'sim',
        mensagem: 'Ela aceitou sair com você!'
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Email enviado com sucesso:', data);
    })
    .catch((error) => {
      console.error('Erro ao enviar o email:', error);
    });
    
    alert('Obrigado por sua resposta!');
  }
});
