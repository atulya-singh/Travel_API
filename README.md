# Travel_API 
REST API built for Travel Journal APP. Built with Node.js and Express, this project demonstrates core CRUD operations plus search and filtering capabilities.

## Overview of the Endpoints:
1. <b>GET /trips</b> → List all trips (with optional filters)
2. <b>GET /trips/:id</b> → Get a unique trip by ID. (Optional: you could add this if needed)
3. <b>POST /trips</b> → Create a new trip
4. <b>PUT /trips/:id</b> → Update an existing trip
5. <b>DELETE /trips/:id</b> → Delete a trip by ID.

## Example Requests and Responses:

1. ### Create a Trip

#### Request
```POST /trips
Content-Type: application/json
```
#### JSON Request Body
```
{
  "destination": "Rome",
  "date": "2024-07-01",
  "tripDaysDuration": 6,
  "notes": "Colosseum and Vatican tour",
  "rating": 4
}
```
#### Response
```
{
  "id": 4,
  "destination": "Rome",
  "date": "2024-07-01",
  "tripDaysDuration": 6,
  "notes": "Colosseum and Vatican tour",
  "rating": 4
}
```

2. ### Get All Trips
   
#### Request
```
GET /trips
```

#### Response
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

3. ### Get a Trip by ID
   
#### Request
```
GET /trips/4
```

#### Response
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

4. ### Update a Trip 

#### Request
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
#### Response
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

5. ### Delete a Trip
   
#### Request
```
DELETE /trips/4
```

#### Response
```
{
  "message": "Trip with id 4 deleted successfully"
}
```

## Design Choices and Implementation Overview

1. ### API endpoint Discussion 

To design the API, I focused on keeping the specs resource-oriented by centring the API around the `/trips` resource. Each trip is uniquely identified by an `id` and the structure of a trip includes its destination, date, duration, notes, and rating.

The reasoning was to establish a clean, minimal API that could serve as a foundation for any front-end project. By starting with /trips, we keep the surface area of the API small while still offering meaningful functionality.

#### Why not /users?

I chose not to introduce /users at this stage because the initial version of the API isn’t designed around account management or authentication. Adding /users would have forced us to introduce login and security considerations that aren’t critical to the core goal of simply recording and retrieving trips. /users makes sense once we evolve into a multi-user system, but for now, it would only add unnecessary complexity.

#### Why not /destination?

While destinations are an important piece of data, they are not standalone resources. A destination like “Rome” only becomes meaningful in the context of a trip that includes a date, duration, and rating. Designing around /destination would have led us into awkward patterns like /destination/Rome/trips, which complicated the API without giving us additional clarity. For now, destinations remain as attributes of a trip rather than first-class resources.

#### Why /trips works best (for now)

1. It centers the API on individual trips
2. It helps keep the design intuitive and self-contained — one resource captures everything we need.
3. It scales — we can later introduce /users and link them to trips (e.g., /users/{id}/trips) when multi-user support becomes a requirement.
4. Ensures flexibility — the same /trips API can be reused by different front-end projects without changes.

In short, I wanted the API to be simple, consistent, and useful right away, while leaving room for future expansion.

2. ### Validation Choices Discussion

## Future Plans
Looking ahead, there are several key directions for evolving the API beyond its current /trips-focused design:

1. User Management and Authentication - Introduce a /users resource and secure endpoints with authentication so trips can be tied to individual accounts.
2. Enhanced Querying - Add support for filtering by date, destination, and rating, as well as sorting and pagination for scalability. (examples: filter trips by date range (`/trips?from=2024-01-01&to=2024-12-31`), filter by destination (`/trips?destination=Tokyo`))
3. Expand Trip Model - Extend trips to include budget details, flights, and the ability to attach files or images.
4. Analytics and Insights - Create an extended API ```GET /analytics``` that could get pre-aggregated metrics about the data in `/trips` like so:
```
{
  "totalTrips": 15,
  "averageDuration": 6.2,
  "mostPopularDestination": "Paris",
  "highestRatedDestination": "Kyoto",
  "averageRating": 4.3
}
```

