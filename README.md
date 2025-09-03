Overview of the Endpoints:
# Travel_API
REST API built for Travel Journal APP.Built with Node.js and Express, this project demonstrates core CRUD operations plus search and filtering capabilities.

Overview of the Endpoints:
GET /trips → Get all trips (with optional filters)
GET /trips/:id → Get a trip by ID. (Optional: you could add this if needed)
POST /trips → Create a new trip
PUT /trips/:id → Update an existing trip
DELETE /trips/:id → Delete a trip

Example Requests and Responses:

RequestPOST/trips:
{
  "destination": "Rome",
  "date": "2024-07-01",
  "tripDaysDuration": 6,
  "notes": "Colosseum and Vatican tour",
  "rating": 4
}
Respones:
{
  "id": 4,
  "destination": "Rome",
  "date": "2024-07-01",
  "tripDaysDuration": 6,
  "notes": "Colosseum and Vatican tour",
  "rating": 4
}
<<<<<<< HEAD




=======
>>>>>>> origin/master
