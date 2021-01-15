const path = require("path");

module.exports = function(app) {

// Serve our root route
app.get("/", (req, res) => {
    res.send(index.html);
  });
  
  // Serve our exercise route
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  
  // Serve our stats route
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });  

}