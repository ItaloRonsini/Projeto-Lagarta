
document.addEventListener('DOMContentLoaded', () => {

  function irParaPagina(id) {
    document.querySelectorAll('.page').forEach(pagina => {
      pagina.classList.toggle('active', pagina.id === `page-${id}`);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('[data-goto]').forEach(botao => {
    botao.addEventListener('click', () => {
      irParaPagina(botao.dataset.goto);
    });
  });

  const abas = document.querySelectorAll('.tab-btn');
  if (abas.length) {
    abas.forEach(aba => {
      aba.addEventListener('click', () => {
        const tipo = aba.dataset.tab; // ex: "good" ou "bad"
        abas.forEach(a => a.classList.remove('active-good', 'active-bad'));
        aba.classList.add(tipo === 'bad' ? 'active-bad' : 'active-good');

        document.querySelectorAll('.food-card').forEach(card => {
          const ehRuim = card.classList.contains('bad');
          card.style.display = (tipo === 'bad') === ehRuim ? '' : 'none';
        });
      });
    });
  }

  document.querySelectorAll('.article-card').forEach(artigo => {
    const cabecalho = artigo.querySelector('.article-header');
    const corpo = artigo.querySelector('.article-body');
    if (cabecalho && corpo) {
      corpo.style.display = 'none';
      cabecalho.style.cursor = 'pointer';
      cabecalho.addEventListener('click', () => {
        corpo.style.display = corpo.style.display === 'none' ? 'block' : 'none';
      });
    }
  });

});