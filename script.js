// Data Kalender Ramadhan 2025 (1 Maret - 31 Maret 2025)
const ramadhanDates = [
  { gregorian: "2025-03-01", hijri: "1446-01-01", imsak: "04:30", subuh: "04:40", maghrib: "18:10" },
  { gregorian: "2025-03-02", hijri: "1446-01-02", imsak: "04:29", subuh: "04:39", maghrib: "18:10" },
  // Tambahkan tanggal lainnya sampai 31 Maret 2025
];

// Tanggal haid (1-4 Maret 2025 dan prediksi 28 hari setelahnya)
const haidDates = ["2025-03-01", "2025-03-02", "2025-03-03", "2025-03-04", "2025-03-29", "2025-03-30", "2025-03-31"];

// Quotes Islami
const quotes = [
  "Ramadhan bukan hanya tentang puasa, tapi tentang hati yang lebih dekat dengan-Nya.",
  "Hari ini adalah kesempatan baru untuk menjadi lebih baik."
];

// Fungsi untuk menampilkan kalender
function renderCalendar() {
  const calendarGrid = document.getElementById('calendar-grid');
  calendarGrid.innerHTML = '';
  ramadhanDates.forEach(date => {
    const dateElement = document.createElement('div');
    dateElement.className = 'date';
    if (haidDates.includes(date.gregorian)) {
      dateElement.classList.add('haid');
    }
    dateElement.innerHTML = `
      <span class="gregorian">${date.gregorian.split('-')[2]}</span>
      <span class="hijri">${date.hijri.split('-')[2]}</span>
    `;
    dateElement.addEventListener('click', () => openModal(date));
    calendarGrid.appendChild(dateElement);
  });
}

// Fungsi untuk menampilkan modal To-Do List
function openModal(date) {
  const modal = document.getElementById('todo-modal');
  const modalDate = document.getElementById('modal-date');
  modalDate.innerText = date.gregorian;
  modal.style.display = 'block';
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

// Fungsi untuk menampilkan informasi harian
function updateDailyInfo() {
  const today = new Date().toISOString().split('T')[0];
  const todayData = ramadhanDates.find(date => date.gregorian === today);
  if (todayData) {
    document.getElementById('current-date').innerText = todayData.gregorian;
    document.getElementById('fasting-day').innerText = ramadhanDates.indexOf(todayData) + 1;
    document.getElementById('imsak-time').innerText = todayData.imsak;
    document.getElementById('subuh-time').innerText = todayData.subuh;
    document.getElementById('maghrib-time').innerText = todayData.maghrib;
  }
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
  renderCalendar();
  showRandomQuote();
  updateDailyInfo();
});
