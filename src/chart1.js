function createChart(dict) {
    labels = Object.keys(dict)
    data = Object.values(dict)
    var ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'most popular cars',
                data: data,
            }]
        }
    });

    return dict
}
