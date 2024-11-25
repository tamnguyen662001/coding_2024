// Function to display a real-time clock
function realtimeClock() {
  const d = new Date();
  let h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();

  // Determine AM or PM
  const amPm = h >= 12 ? "PM" : "AM";
  h = h > 12 ? h - 12 : h;

  // Ensure two-digit formatting for hours, minutes, and seconds
  const formatNumber = (num) => ("0" + num).slice(-2);
  const formattedH = formatNumber(h);
  const formattedM = formatNumber(m);
  const formattedS = formatNumber(s);

  // Update the clock element with the current time
  document.getElementById(
    "clock"
  ).innerHTML = `${formattedH}  :  ${formattedM}  :  ${formattedS}  :  ${amPm}`;
}

// Update the clock every second
setInterval(realtimeClock, 1000);

// Smooth scrolling with an offset for fixed navigation
$('a[href*="#"]')
  // Ignore links that do not link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .on("click", function (event) {
    // Proceed only if there is a valid hash
    if (this.hash !== "") {
      event.preventDefault(); // Prevent default behavior

      const hash = this.hash;

      // Use jQuery's animate() method to create smooth scrolling
      $("html, body").animate(
        {
          // Adjust scrolling position with a 70px offset
          // scrollTop: $(hash).offset().top - 70,
          scrollTop: $(hash).offset().top - 3.875
        },
        800,
        function () {
          // Update the URL with the hash without jumping to the section
          if (history.pushState) {
            history.pushState(null, null, hash);
          } else {
            window.location.hash = hash;
          }
        }
      );
    }
  });

  document.querySelectorAll('.carousel-control-prev, .carousel-control-next').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Ngăn cuộn mặc định khi click

        // Điều khiển carousel
        if (e.target.closest('.carousel-control-next')) {
            $('#slides').carousel('next'); // Chuyển đến slide tiếp theo
        } else {
            $('#slides').carousel('prev'); // Chuyển đến slide trước
        }
    });
}); 


