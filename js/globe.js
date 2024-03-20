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

  // Graticule
  let graticule = d3.geoGraticule();
  context.beginPath();
  context.strokeStyle = '#eee';
  geoGenerator(graticule());
  context.stroke();

  yaw += 0.15

	let circle = d3.geoCircle().center([0, 0]).radius(0.5)

  // Indiana Jones 1

  // San Francisco
	circle = d3.geoCircle().center([-122.2204, 37.7203]).radius(0.5)
	context.beginPath();
	context.strokeStyle = 'red';
	geoGenerator(circle());
	context.stroke();
  context.fill();
  context.fillStyle = 'red';

  // Manilla
	circle = d3.geoCircle().center([120.9809, 14.6007]).radius(0.5)
	context.beginPath();
	context.strokeStyle = 'red';
	geoGenerator(circle());
	context.stroke();
  context.fill();
  context.fillStyle = 'red';

  // Patan
	circle = d3.geoCircle().center([85.3228, 27.6601]).radius(0.5)
	context.beginPath();
	context.strokeStyle = 'red';
	geoGenerator(circle());
	context.stroke();
  context.fill();
  context.fillStyle = 'red';

  // Karachi
	circle = d3.geoCircle().center([67.1637, 24.9056]).radius(0.5)
	context.beginPath();
	context.strokeStyle = 'red';
	geoGenerator(circle());
	context.stroke();
  context.fill();
  context.fillStyle = 'red';

  //Baghdad
	circle = d3.geoCircle().center([44.2348, 33.2680]).radius(0.5)
	context.beginPath();
	context.strokeStyle = 'red';
	geoGenerator(circle());
	context.stroke();
  context.fill();
  context.fillStyle = 'red';

  // Cairo
	circle = d3.geoCircle().center([31.4157, 30.1154]).radius(0.5)
	context.beginPath();
	context.strokeStyle = 'red';
	geoGenerator(circle());
	context.stroke();
  context.fill();
  context.fillStyle = 'red';

	// San Francisco -> Manilla
	context.beginPath();
	context.strokeStyle = 'red';
  context.lineWidth = 1;
	geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [[-122.2204, 37.7203], [120.9809, 14.6007]]}});
	context.stroke();

	// Manilla -> Patan
	context.beginPath();
	context.strokeStyle = 'red';
  context.lineWidth = 1;
	geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [[120.9809, 14.6007], [85.3228, 27.6601]]}});
	context.stroke();

	// Patan -> Karachi
	context.beginPath();
	context.strokeStyle = 'red';
  context.lineWidth = 1;
	geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [[85.3228, 27.6601], [67.1637, 24.9056]]}});
	context.stroke();

	//  Karachi -> Baghdad
	context.beginPath();
	context.strokeStyle = 'red';
  context.lineWidth = 1;
	geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [[67.1637, 24.9056], [44.2348, 33.2680]]}});
	context.stroke();

	//  Baghdad -> Cairo
	context.beginPath();
	context.strokeStyle = 'red';
  context.lineWidth = 1;
	geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [[44.2348, 33.2680], [31.4157, 30.1154]]}});
	context.stroke();


  
  // Indiana Jones 2

  // Shanghai
	circle = d3.geoCircle().center([121.3440, 31.2014]).radius(0.5)
	context.beginPath();
	context.strokeStyle = 'red';
	geoGenerator(circle());
	context.stroke();
  context.fill();
  context.fillStyle = 'red';


  
  // Indiana Jones 2

  // New York
	circle = d3.geoCircle().center([-73.7918, 40.6471]).radius(0.5)
	context.beginPath();
	context.strokeStyle = 'red';
	geoGenerator(circle());
	context.stroke();
  context.fill();
  context.fillStyle = 'red';

  // St Johns
	circle = d3.geoCircle().center([-52.7949, 47.5215]).radius(0.5)
	context.beginPath();
	context.strokeStyle = 'red';
	geoGenerator(circle());
	context.stroke();
  context.fill();
  context.fillStyle = 'red';

  // Azores
	circle = d3.geoCircle().center([-25.4340, 37.7179]).radius(0.5)
	context.beginPath();
	context.strokeStyle = 'red';
	geoGenerator(circle());
	context.stroke();
  context.fill();
  context.fillStyle = 'red';

  // Lisbon
	circle = d3.geoCircle().center([-9.1352, 38.7781]).radius(0.5)
	context.beginPath();
	context.strokeStyle = 'red';
	geoGenerator(circle());
	context.stroke();
  context.fill();
  context.fillStyle = 'red';

  // Venice
	circle = d3.geoCircle().center([12.3354, 45.4979]).radius(0.5)
	context.beginPath();
	context.strokeStyle = 'red';
	geoGenerator(circle());
	context.stroke();
  context.fill();
  context.fillStyle = 'red';

	//  New York -> St Johns
	context.beginPath();
	context.strokeStyle = 'red';
  context.lineWidth = 1;
	geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [[-73.7918, 40.6471], [-52.7949, 47.5215]]}});
	context.stroke();

	//  St Johns -> Azores
	context.beginPath();
	context.strokeStyle = 'red';
  context.lineWidth = 1;
	geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [[-52.7949, 47.5215], [-25.4340, 37.7179]]}});
	context.stroke();

	//  Azores -> Lisbon
	context.beginPath();
	context.strokeStyle = 'red';
  context.lineWidth = 1;
	geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [[-25.4340, 37.7179], [-9.1352, 38.7781]]}});
	context.stroke();

	//  Lisbon -> Venice
	context.beginPath();
	context.strokeStyle = 'red';
  context.lineWidth = 1;
	geoGenerator({type: 'Feature', geometry: {type: 'LineString', coordinates: [[-9.1352, 38.7781], [12.3354, 45.4979]]}});
	context.stroke();
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