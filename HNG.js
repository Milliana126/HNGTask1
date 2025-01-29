// script.js
function updateLagosTime() {
    const timeElement = document.getElementById('current-time');
    
    function formatLagosTime() {
        const now = new Date();
        // Get UTC time and add 1 hour for Lagos (UTC+1)
        const lagosHours = now.getUTCHours() + 1;
        const hours = lagosHours > 23 ? lagosHours - 24 : lagosHours;
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        const seconds = String(now.getUTCSeconds()).padStart(2, '0');
        
        return` ${String(hours).padStart(2, '0')}:${minutes}:${seconds} WAT`;
    }

    function update() {
        timeElement.textContent = formatLagosTime();
    }

    update(); // Update immediately
    setInterval(update, 1000); // Update every second
}

document.addEventListener('DOMContentLoaded', updateLagosTime);