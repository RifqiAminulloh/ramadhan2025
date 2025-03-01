// Data Kalender Ramadhan 2025
const ramadhanDates = [
  { gregorian: "2025-03-01", hijri: "1446-01-01" },
  // Tambahkan tanggal lainnya sampai 31 Maret 2025
];

// Quotes Islami
const quotes = [
  "Ramadhan bukan hanya tentang puasa, tapi tentang hati yang lebih dekat dengan-Nya.",
  "Hari ini adalah kesempatan baru untuk menjadi lebih baik."
];

// Fungsi untuk menampilkan kalender
function renderCalendar() {
  const calendarGrid = document.getElementById('calendar-grid');
  ramadhanDates.forEach(date => {
    const dateElement = document.createElement('div');
    dateElement.className = 'date';
    dateElement.innerHTML = `
      <span class="gregorian">${date.gregorian}</span>
      <span class="hijri">${date.hijri}</span>
    `;
    calendarGrid.appendChild(dateElement);
  });
}

// Fungsi untuk menampilkan modal To-Do List
function openModal() {
  document.getElementById('todo-modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('todo-modal').style.display = 'none';
}

// Fungsi untuk menampilkan quotes random
function showRandomQuote() {
  const quoteElement = document.getElementById('quote');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.innerText = randomQuote;
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
  renderCalendar();
  showRandomQuote();
});
