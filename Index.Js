const express = require('express');
const app = express();
const port = 8080;
app.use(express.json());


let trips=[
  {id:1, destination:"Paris", date:"2023-10-01", tripDaysDuration:7, notes:"Eiffel Tower visit",rating:5},
  {id:2, destination:"New York", date:"2023-11-15", tripDaysDuration:5, notes:"Statue of Liberty tour",rating:5},
  {id:3, destination:"Tokyo", date:"2024-01-20", tripDaysDuration:10, notes:"Cherry blossom season",rating:3}
];

// Test route
app.get('/', (req, res) => {
  res.send('Hello, your server is running!');
});

app.post("/trips", (req, res) => {
  const { destination, date, tripDaysDuration, notes, rating } = req.body;

  // Basic validation
  if (!destination || !date || !tripDaysDuration || !rating) {
    return res.status(400).json({ error: "Destination, date, duration, and rating are required" });
  }
  if (rating < 0 || rating > 5) {
    return res.status(400).json({ error: "Rating must be between 0 and 5" });
  }
  if (tripDaysDuration< 0) {
    return res.status(400).json({ error: "TripDaysDuration must be greater than 0" });
  }
  // Create new trip object
  const newTrip = {
    id: trips.length + 1, // auto-increment ID
    destination,
    date,
    tripDaysDuration,
    notes: notes || "", // optional
    rating
  };

  trips.push(newTrip); // add to array
  res.status(200).json(newTrip); // return the new trip
});

// GET trips with optional filters
app.get("/trips", (req, res) => {
  let results = trips;

  const { destination, minRating, start, end } = req.query;

  // Filter by destination (case insensitive, partial match allowed)
  if (destination) {
    results = results.filter(t =>
      t.destination.toLowerCase().includes(destination.toLowerCase())
    );
  }

  // Filter by minimum rating
  if (minRating) {
    results = results.filter(t => t.rating >= parseInt(minRating));
  }

  // Filter by date range
  if (start && end) {
    results = results.filter(t => t.date >= start && t.date <= end);
  }

  res.json(results);
});

 app.put("/trips/:id", (req, res) => {
  //Look up trip by ID
  //If not found, return 404
  const id = parseInt(req.params.id);
  const trip = trips.find(t => t.id === id);
  // If trip not found, return 404
  if (!trip) {
    return res.status(404).json({ error: "Trip not found" });
  }

  // Extract fields from body
  const { destination, date, tripDaysDuration, notes, rating } = req.body;

  // Basic validation
  if (!destination || !date || !tripDaysDuration || rating === undefined) {
    return res.status(400).json({ error: "Destination, date, tripDaysDuration, and rating are required" });
  }
  if (rating < 0 || rating > 5) {
    return res.status(400).json({ error: "Rating must be between 0 and 5" });
  }
  if (tripDaysDuration< 0) {
    return res.status(400).json({ error: "TripDaysDuration must be greater than 0" });
  }

  // Update the trip object
  trip.destination = destination;
  trip.date = date;
  trip.tripDaysDuration = tripDaysDuration;
  trip.notes = notes || "";
  trip.rating = rating;

  res.json(trip); // send back the updated trip
});

app.delete("/trips/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Find the trip
  const trip = trips.find(t => t.id === id);

  // If trip not found, return 404
  if (!trip) {
    console.log("Trip not found for ID:", id);
    return res.status(404).json({ error: "Trip not found" });
  }

  // Remove trip from array
  trips = trips.filter(t => t.id !== id);
  
  // Return deleted trip
  res.json({ message: "Trip deleted successfully", deletedTrip: trip });
});



app.listen(port, () => {
  console.log(`its alive on http://localhost:${port}`);
});



