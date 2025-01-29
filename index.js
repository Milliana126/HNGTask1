// Function to update UTC time
function updateUTCTime() {
    const utcTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const now = new Date();
    utcTimeElement.textContent = Current UTC Time: ${now.toUTCString()};
}

// Update time on page load
updateUTCTime();

// Refresh UTC time every second
setInterval(updateUTCTime, 1000);