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
