// Lógica para o botão "Não"
const naoButton = document.getElementById('nao');

// Adiciona o comportamento de mover o botão "Não" ao passar o mouse
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

// Função para tocar música e criar corações ao clicar "Sim"
function playSoundAndCreateHearts() {
  const audio = new Audio("Tribalistas - Velha Infância (mp3cut.net).mp3");
  audio.play();  // Ativa o áudio ao clicar/tocar no botão

  alert("Sabia que você diria sim! 💖 Clique OK para continuar!");
  createHearts();  // Chama a função de criar corações
}

// Função para criar corações flutuando na tela
function createHearts() {
  const heartContainer = document.getElementById('heartContainer');
  
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`; // Espalha os corações horizontalmente
    heart.style.animationDelay = `${Math.random() * 2}s`; // Delays aleatórios para cada coração

    heartContainer.appendChild(heart);
    
    // Remove o coração após 4 segundos
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}


function simClicked() {
  playSoundAndCreateHearts();  
  
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
}


document.getElementById('sim').addEventListener('click', simClicked);
document.getElementById('sim').addEventListener('touchstart', simClicked);


function naoClicked() {
  const naoButton = document.getElementById('nao');
  naoButton.style.position = 'absolute';
  naoButton.style.top = Math.random() * window.innerHeight + 'px';
  naoButton.style.left = Math.random() * window.innerWidth + 'px';
}


document.getElementById('nao').addEventListener('click', naoClicked);
document.getElementById('nao').addEventListener('touchstart', naoClicked); 
