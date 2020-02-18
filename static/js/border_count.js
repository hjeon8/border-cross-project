Plotly.d3.csv(
    "https://raw.githubusercontent.com/hjeon8/border-cross-project/master/data/value_prediction.csv", function (err, rows) {
      function unpack(rows, key) {
        return rows.map(function (row) {
          return row[key];
  });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'Border Crossing Count',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'Border'),
  line: {
    color: '#17BECF'
  }
}

var data = [trace1];

var layout = {
  title: 'Border Cross Count by Month and Year',
  xaxis: {
    title: 'Year-Month',
	tickformat: '%Y-%m'
  },
  yaxis: {
	title: 'Border Crossing Count'
  }
};

Plotly.newPlot('myDiv1', data, layout);
})
