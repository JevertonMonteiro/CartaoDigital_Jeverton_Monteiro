window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  container.style.opacity = 0;
  container.style.transform = 'scale(0.95)';

  setTimeout(() => {
    container.style.transition = 'all 0.6s ease';
    container.style.opacity = 1;
    container.style.transform = 'scale(1)';
  }, 100);
});


const socialLinks = document.querySelectorAll('#social-links a');
socialLinks.forEach(link => {
  link.addEventListener('click', () => {
    link.style.animation = 'pulse 0.6s ease-in-out';
    setTimeout(() => (link.style.animation = ''), 600);
  });
});


const modal = document.getElementById('modal');
const abrirModal = document.getElementById('abrirModal');
const fecharModal = document.querySelector('.fechar');
const enviarWhatsApp = document.getElementById('enviarWhatsApp');

abrirModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

fecharModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

enviarWhatsApp.addEventListener('click', () => {
  const servicosSelecionados = [...document.querySelectorAll('input[name="servico"]:checked')].map(el => el.value);

  if (servicosSelecionados.length === 0) {
    alert('Selecione pelo menos um serviço.');
    return;
  }

  const mensagem = `Olá! Gostaria de um orçamento para os seguintes serviços:%0A• ${servicosSelecionados.join('%0A• ')}`;
  const numero = '5582982201611';
  const url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`;
  window.open(url, '_blank');
});
