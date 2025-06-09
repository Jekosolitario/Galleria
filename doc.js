// 1️⃣ Seleziono tutte le immagini con la classe "img-thumb"
const immagini = document.querySelectorAll('.img-thumb');

// 2️⃣ Seleziono gli elementi del lightbox: il contenitore, l'immagine grande e il bottone di chiusura
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('closeBtn');

// 3️⃣ Aggiungo un "click listener" su ogni immagine in miniatura
immagini.forEach(img => {
  img.addEventListener('click', () => {
    // Quando clicco su un'immagine, mostro il lightbox rimuovendo la classe "hidden"
    lightbox.classList.remove('hidden');

    // Imposto il src dell'immagine grande uguale a quella cliccata
    lightboxImg.src = img.src;

    // Copio anche l'attributo alt per accessibilità
    lightboxImg.alt = img.alt;
  });
});

// 4️⃣ Quando clicco sulla X (bottone di chiusura), nascondo il lightbox aggiungendo "hidden"
closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

// 5️⃣ Quando clicco fuori dall'immagine (cioè sullo sfondo scuro), chiudo il lightbox
lightbox.addEventListener('click', e => {
  // Controllo se ho cliccato proprio sul contenitore "lightbox" e non sull'immagine
  if (e.target === lightbox) {
    lightbox.classList.add('hidden');
  }
});




// aggiungo i filtri dell Galleria



// 6️⃣ creo la funzione che mostra le card filtrate con il filtro passato

/* assegno i pulsanti dei filtri a delle costanti */
function filtri() {
  const b_visualizzaTutto = document.getElementById('tutti');
  const b_visualizzaNatura = document.getElementById('natura');
  const b_visualizzaUrbano = document.getElementById('urbano');
  const b_visualizzaPersone = document.getElementById('persone');

  /* assegno tutti i div con class .card ad una costante */
  const cards = document.querySelectorAll('.card');
  console.log(cards); // 👈 NodeList di tutte le card

  b_visualizzaTutto.addEventListener('click', () => {
    cards.forEach(card => {
      card.style.display = 'flex';
    })
  })

  b_visualizzaNatura.addEventListener('click', () => {
    cards.forEach(card => {
      if (card.classList.contains('natura')) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    })
  })

  b_visualizzaUrbano.addEventListener('click', () => {
    cards.forEach(card => {
      if (card.classList.contains('urbano')) {
        card.style.display = ' flex';
      } else {
        card.style.display = 'none';
      }
    })
  })

  b_visualizzaPersone.addEventListener('click', () => {
    cards.forEach(card => {
      if (card.classList.contains('persone')) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    })
  })
}

filtri();