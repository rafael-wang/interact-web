document.addEventListener("DOMContentLoaded", function () {
    // Define a function to check if a URL is valid
    function checkValidUrl(url, callback) {
      fetch(url, { method: 'HEAD' })
        .then((response) => {
          if (!response.ok) {
            // If the URL is not valid (404, etc.), redirect to the custom 404 page
            window.location.href = "/404.html"; // Change to your 404 page path
          } else {
            // URL is valid; do nothing
            callback && callback();
          }
        })
        .catch(() => {
          // In case of network error, redirect to 404 page
          window.location.href = "/404.html"; // Change to your 404 page path
        });
    }
  
    // Check if the current page URL is valid
    checkValidUrl(window.location.href);
  });
  