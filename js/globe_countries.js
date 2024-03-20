import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";


var colorWater = 'blue'
var colorLand = '#eee'
var colorGraticule = '#ccc'
var colorBorder = '#000'
var colorCountry = '#C30000'

let land = {}
let countries = {}
let america = {}

let context = d3.select('#globe_countries canvas')
  .node()
  .getContext('2d');

let projection = d3.geoOrthographic()
  .scale(220);

let geoGenerator = d3.geoPath()
  .projection(projection)
  .context(context);

let yaw = 120;

function updateGlobe() {
  projection.rotate([yaw, -25])

  context.clearRect(0, 0, 800, 600);

  yaw += 0.5

  // Draw lines
  context.lineWidth = 0.5;
  context.strokeStyle = colorBorder;
  context.fillStyle = colorLand;

  // Draw Land
  context.beginPath();
  geoGenerator({type: 'FeatureCollection', features: land.features})
  context.fill();
  context.stroke();
  
  // Draw lines
  context.lineWidth = 0.5;
  context.strokeStyle = colorBorder;
  context.fillStyle = colorCountry;

  // Draw Countries
  context.beginPath();
  geoGenerator({type: 'FeatureCollection', features: countries.features})
  context.fill();
  context.stroke();
  
  // Draw lines
  context.lineWidth = 0.5;
  context.strokeStyle = colorBorder;
  context.fillStyle = '#4B57C1';

  // Draw Countries
  context.beginPath();
  geoGenerator({type: 'FeatureCollection', features: america.features})
  context.fill();
  context.stroke();
}

// REQUEST DATA
// Formerly https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json
d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json')
	.then(function(json) {
		land = json;
		window.setInterval(updateGlobe, 0.05);
})

d3.json('British_Empire.json')
	.then(function(json) {
  countries = json;
})

d3.json('USA.json')
	.then(function(json) {
		america = json;
})

// Append the SVG element.
content.append(svg.node());