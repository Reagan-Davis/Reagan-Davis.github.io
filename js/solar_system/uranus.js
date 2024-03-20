import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

let geojson = {}

let context = d3.select('#sun')
  .node()
  .getContext('2d');

let projection = d3.geoOrthographic()
  .scale(sun_radius);

let geoGenerator = d3.geoPath()
  .projection(projection)
  .pointRadius(4)
  .context(context);

let yaw = 350;

function update() {
  projection.rotate([yaw, -25])

  context.clearRect(0, 0, 800, 600);

  context.lineWidth = 0.5;
  context.strokeStyle = '#000000';

  context.beginPath();
  geoGenerator({type: 'FeatureCollection', features: geojson.features})
  context.stroke();

  // Graticule
  let graticule = d3.geoGraticule();
  context.beginPath();
  context.strokeStyle = '#ddd';
  geoGenerator(graticule());
  context.stroke();

  yaw += 0.15
}

// REQUEST DATA
// Formerly ne_50m_land.geojson
d3.json('https://gist.githubusercontent.com/d3indepth/f28e1c3a99ea6d84986f35ac8646fac7/raw/c58cede8dab4673c91a3db702d50f7447b373d98/ne_110m_land.json')
	.then(function(json) {
  geojson = json;
  window.setInterval(update, 5);
})

// Append the SVG element.
content.append(svg.node());