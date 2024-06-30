document.addEventListener('DOMContentLoaded', () => {
    // Sample data
    const salesData = [1200, 1900, 3000, 500, 2000, 1800, 2200];
    const userData = [30, 40, 20, 50, 60, 80, 90];
    const inventoryCount = 350;

    // Update the stats
    document.getElementById('total-sales').textContent = `$${salesData.reduce((a, b) => a + b, 0)}`;
    document.getElementById('active-users').textContent = `${userData[userData.length - 1]}`;
    document.getElementById('inventory-count').textContent = `${inventoryCount}`;

    // Create sales chart
    const salesCtx = document.getElementById('sales-chart').getContext('2d');
    const salesChart = new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Sales ($)',
                data: salesData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Create users chart
    const usersCtx = document.getElementById('users-chart').getContext('2d');
    const usersChart = new Chart(usersCtx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Active Users',
                data: userData,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});