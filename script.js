// Set current date
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const currentDate = new Date().toLocaleDateString("id-ID", options);
document.getElementById("current-date").textContent = currentDate;

document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const menuItems = document.querySelectorAll(".menu-item");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      // Tampilkan/hilangkan menu sesuai kategori
      menuItems.forEach((item) => {
        if (category === "all" || item.classList.contains(category)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

      // Ganti tombol aktif
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});

