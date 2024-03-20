import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";


var colorWater = 'blue'
var colorLand = '#eee'
var colorGraticule = '#ccc'
var colorBorder = '#000'
var colorCountry = '#C30000'

let land = {}
let countries = {}

// Where this is inputted in the html
let context = d3.select('#working_colors canvas')
  .node()
  .getContext('2d');

// What projection is used
let projection = d3.geoEqualEarth()
  .scale(150)
  .rotate([-10, 0, 0]);

// How the geometry is generated
let geoGenerator = d3.geoPath()
.projection(projection)
.context(context);

function updateLand() {

  // Draw lines
  context.lineWidth = 0.5;
  context.strokeStyle = colorBorder;
  context.fillStyle = colorLand;

  // Draw Land
  context.beginPath();
  geoGenerator({type: 'FeatureCollection', features: land.features})
  context.fill();
  context.stroke();
}

function updateCountries() {
  
  // Draw lines
  context.lineWidth = 0.5;
  context.strokeStyle = colorBorder;
  context.fillStyle = colorCountry;

  // Draw Countries
  context.beginPath();
  geoGenerator({type: 'FeatureCollection', features: countries.features})
  context.fill();
  context.stroke();
}

function updateUnitedStates() {
  
  // Draw lines
  context.lineWidth = 0.5;
  context.strokeStyle = colorBorder;
  context.fillStyle = '#4B57C1';

  // Draw Countries
  context.beginPath();
  geoGenerator({type: 'FeatureCollection', features: countries.features})
  context.fill();
  context.stroke();
  context.fill();
  //remove last fill for states
}

// REQUEST DATA
// Formerly https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json
d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json')
	.then(function(json) {
		land = json;
		updateLand();
})

d3.json('British_Empire.json')
	.then(function(json) {
		countries = json;
		updateCountries();
})

d3.json('USA.json')
	.then(function(json) {
		countries = json;
		updateUnitedStates();
})

// Append the SVG element.
base.append(svg.node());