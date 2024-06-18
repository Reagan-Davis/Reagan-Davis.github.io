// Dimensions of the SVG container
const width = window.innerWidth;
const height = window.innerHeight;

// Create an SVG element
const svg = d3.select("#map-svg")
  .attr("width", width)
  .attr("height", height);

// Define a map projection
const projection = d3.geoMercator()
  .scale(150)
  .translate([width / 2, height / 1.5]);

// Define a path generator
const path = d3.geoPath()
  .projection(projection);

// Load and display the World map
d3.json("ne_50m_land.json").then(function(world) {
  // Draw the countries
  svg.selectAll("path")
    .data(topojson.feature(world, world.objects.countries).features)
    .enter().append("path")
    .attr("d", path)
    .attr("fill", "lightblue")
    .attr("stroke", "white")
    .attr("stroke-width", 0.5)
    // Add hover effects
    .on("mouseover", function(event, d) {
      d3.select(this)
        .attr("fill", "orange"); // Change color on hover
    })
    .on("mouseout", function(event, d) {
      d3.select(this)
        .attr("fill", "lightblue"); // Revert to original color on mouseout
    });
});