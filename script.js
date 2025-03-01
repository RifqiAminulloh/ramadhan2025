// Data Jadwal Sholat (Contoh)
const jadwalSholat = {
  "15 Maret 2025": {
    imsak: "04:29",
    subuh: "04:39",
    dzuhur: "12:04",
    ashar: "15:08",
    maghrib: "18:11",
    isya: "19:22"
  }
};

// Data Kalender Ramadhan 2025
const kalenderRamadhan = [
  { hari: "Sabtu", tanggalMasehi: "1 Maret 2025", tanggalHijriyah: "1 Ramadhan 1446 H" },
  { hari: "Minggu", tanggalMasehi: "2 Maret 2025", tanggalHijriyah: "2 Ramadhan 1446 H" },
  // ... (lanjutkan sampai 31 Maret 2025)
];

// Data To-Do List Default
const todoListDefault = [
  { task: "Ngaji 📖", completed: false },
  { task: "Sholat Wajib 🕌", completed: false },
  { task: "Tarawih 🕋", completed: false },
  { task: "Tahajud 🌙", completed: false },
  { task: "Sedekah 💰", completed: false }
];

// Fungsi untuk menampilkan kalender
function renderKalender() {
  const kalenderGrid = document.getElementById("kalender-grid");
  kalenderRamadhan.forEach((tanggal) => {
    const div = document.createElement("div");
    div.textContent = `${tanggal.tanggalMasehi}\n${tanggal.tanggalHijriyah}`;
    kalenderGrid.appendChild(div);
  });
}

// Fungsi untuk menampilkan To-Do List
function renderTodoList() {
  const todoItems = document.getElementById("todo-items");
  todoListDefault.forEach((item) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.completed;
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(item.task));
    todoItems.appendChild(li);
  });
}

// Inisialisasi
document.addEventListener("DOMContentLoaded", () => {
  renderKalender();
  renderTodoList();
});
