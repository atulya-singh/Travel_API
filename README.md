# Travel_API 
REST API built for Travel Journal APP. Built with Node.js and Express, this project demonstrates core CRUD operations plus search and filtering capabilities.

## Overview of the Endpoints:
1. <b>GET /trips</b> → List all trips (with optional filters)
2. <b>GET /trips/:id</b> → Get a unique trip by ID. (Optional: you could add this if needed)
3. <b>POST /trips</b> → Create a new trip
4. <b>PUT /trips/:id</b> → Update an existing trip
5. <b>DELETE /trips/:id</b> → Delete a trip by ID.

## Example Requests and Responses:

1. Create a Trip

Request
```POST /trips
Content-Type: application/json
```
JSON Request Body
```
{
  "destination": "Rome",
  "date": "2024-07-01",
  "TripDaysDuration": 6,
  "notes": "Colosseum and Vatican tour",
  "rating": 4
}
```

Response
```
{
  "id": 4,
  "destination": "Rome",
  "date": "2024-07-01",
  "TripDaysDuration": 6,
  "notes": "Colosseum and Vatican tour",
  "rating": 4
}
```

2. Get All Trips
   
Request
```
GET /trips
```

Response
```
[
  {
    "id": 1,
    "destination": "Paris",
    "date": "2023-09-15",
    "TripDaysDuration": 5,
    "notes": "Eiffel Tower and Louvre visit",
    "rating": 5
  },
  {
    "id": 2,
    "destination": "Tokyo",
    "date": "2024-03-10",
    "TripDaysDuration": 7,
    "notes": "Cherry blossom season",
    "rating": 4
  },
  {
    "id": 4,
    "destination": "Rome",
    "date": "2024-07-01",
    "TripDaysDuration": 6,
    "notes": "Colosseum and Vatican tour",
    "rating": 4
  }
]
```

3. Get a Trip by ID
   
Request
```
GET /trips/4
```

Response
```
{
  "id": 4,
  "destination": "Rome",
  "date": "2024-07-01",
  "TripDaysDuration": 6,
  "notes": "Colosseum and Vatican tour",
  "rating": 4
}
```

4. Update a Trip 

Request
```
PUT /trips/4
Content-Type: application/json
```
JSON Request Body
```
{
  "destination": "Rome",
  "date": "2024-07-01",
  "TripDaysDuration": 7,
  "notes": "Colosseum, Vatican tour, and Pompeii day trip",
  "rating": 5
}
```

Response
```
{
  "id": 4,
  "destination": "Rome",
  "date": "2024-07-01",
  "TripDaysDuration": 7,
  "notes": "Colosseum, Vatican tour, and Pompeii day trip",
  "rating": 5
}
```

5. Delete a Trip
   
Request
```
DELETE /trips/4
```

Response
```
{
  "message": "Trip with id 4 deleted successfully"
}
```
