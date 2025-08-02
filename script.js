 <script>
    // JavaScript for calculating total price dynamically
    const checkboxes = document.querySelectorAll(
      '.menu-item input[type="checkbox"]'
    );
    const totalSpan = document.getElementById("total");

    checkboxes.forEach((box) => {
      box.addEventListener("change", updateTotal);
    });

    function updateTotal() {
      let total = 0;
      checkboxes.forEach((box) => {
        if (box.checked) {
          total += parseInt(box.dataset.price);
        }
      });
      totalSpan.textContent = total;
    }
  </script>