import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

let geojson = {}

let context = d3.select('#content canvas')
  .node()
  .getContext('2d');

let projection = d3.geoOrthographic()
  .scale(220);

let geoGenerator = d3.geoPath()
  .projection(projection)
  .pointRadius(4)
  .context(context);

let yaw = 120;

function update() {
  projection.rotate([yaw, -25])

  context.clearRect(0, 0, 800, 600);

  context.lineWidth = 0.5;
  context.strokeStyle = '#000000';

  context.beginPath();
  geoGenerator({type: 'FeatureCollection', features: geojson.features})
  context.stroke();
  //context.fill();
  //context.fillStyle = '#ddd';

  // Graticule
  let graticule = d3.geoGraticule();
  context.beginPath();
  context.strokeStyle = '#eee';
  geoGenerator(graticule());
  context.stroke();

  // Indiana Jones

  // San Francisco
	let circle = d3.geoCircle().center([-122.2204, 37.7203]).radius(1)
	context.beginPath();
	context.strokeStyle = 'red';
	geoGenerator(circle());
	context.stroke();
  context.fill();

	// San Francisco -> Manilla
	context.beginPath();
	context.strokeStyle = 'red';
  context.lineWidth = 1.5;
	geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [[-122.2204, 37.7203], [120.9809, 14.6007]]}});
	context.stroke();

	// Manilla -> Patan
	context.beginPath();
	context.strokeStyle = 'red';
  context.lineWidth = 1.5;
	geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [[120.9809, 14.6007], [85.3228, 27.6601]]}});
	context.stroke();

	// Patan -> Karachi
	context.beginPath();
	context.strokeStyle = 'red';
  context.lineWidth = 1.5;
	geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [[85.3228, 27.6601], [67.1637, 24.9056]]}});
	context.stroke();

	//  Karachi -> Baghdad
	context.beginPath();
	context.strokeStyle = 'red';
  context.lineWidth = 1.5;
	geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [[67.1637, 24.9056], [44.2348, 33.2680]]}});
	context.stroke();

	//  Baghdad -> Cairo
	context.beginPath();
	context.strokeStyle = 'red';
  context.lineWidth = 1.5;
	geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [[44.2348, 33.2680], [31.4157, 30.1154]]}});
	context.stroke();

  yaw += 0.35
}

// REQUEST DATA
// Formerly ne_50m_land.geojson
// 1936.json
d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json')
	.then(function(json) {
  geojson = json;
  window.setInterval(update, 1);
})

// Append the SVG element.
content.append(svg.node());