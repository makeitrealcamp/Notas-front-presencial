
//// Esto es un Documento

{
  "_id" : ObjectId("569190ca24de1e0ce2dfcd4f"),
  "title" : "Once Upon a Time in the West",
  "year" : 1968,
  "rated" : "PG-13",
  "released" : ISODate("1968-12-21T05:00:00Z"),
  "runtime" : 175,
  "countries" : [
    "Italy",
    "USA",
    "Spain"
  ],
  "genres" : [
    "Western"
  ],
  "director" : "Sergio Leone",
  "writers" : [
    "Sergio Donati",
    "Sergio Leone",
    "Dario Argento",
    "Bernardo Bertolucci",
    "Sergio Leone"
  ],
  "actors" : [
    "Claudia Cardinale",
    "Henry Fonda",
    "Jason Robards",
    "Charles Bronson"
  ],
  "plot" : "Epic story of a mysterious stranger with a harmonica who joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
  "poster" : "http://ia.media-imdb.com/images/M/MV5BMTEyODQzNDkzNjVeQTJeQWpwZ15BbWU4MDgyODk1NDEx._V1_SX300.jpg",
  "imdb" : {
    "id" : "tt0064116",
    "rating" : 8.6,
    "votes" : 201283
  },
  "tomato" : {
    "meter" : 98,
    "image" : "certified",
    "rating" : 9,
    "reviews" : 54,
    "fresh" : 53,
    "consensus" : "A landmark Sergio Leone spaghetti western masterpiece featuring a classic Morricone score.",
    "userMeter" : 95,
    "userRating" : 4.3,
    "userReviews" : 64006
  },
  "metacritic" : 80,
  "awards" : {
    "wins" : 4,
    "nominations" : 5,
    "text" : "4 wins & 5 nominations."
  },
  "type" : "movie"
}


/// Id matching
db.movieDetails.find(ObjectId('569190ca24de1e0ce2dfcd4f'))
db.movieDetails.find({_id: ObjectId('569190ca24de1e0ce2dfcd4f')})

/// Property Matching
db.movieDetails.find({title: "Once Upon a Time in the West"})
db.movieDetails.find({rated: "PG-13"})
// With and
db.movieDetails.find({rated: "PG-13", year: 1968})
db.movieDetails.find({ $and: [{'tomato.meter': {$exists: true}},{'tomato.meter': {$ne: null}}]})
// With Or
db.movieDetails.find({ $or: [{'tomato.meter':{$gt: 95}},{'meteoritic.meter':{$gt: 88}}]})



/// Array Mathching
db.movieDetails.find({actors: [
    "Claudia Cardinale",
    "Henry Fonda",
    "Jason Robards",
    "Charles Bronson"
]})
db.movieDetails.find({actors: {$all: ['Henry Fonda', 'Charles Bronson']}})
db.movieDetails.find({'actors.0': 'Claudia Cardinale'})
db.movieDetails.find({'actors': 'Claudia Cardinale'})

/// Nested Properties Matching
db.movieDetails.find({'tomato.consensus': 'A landmark Sergio Leone spaghetti western masterpiece featuring a classic Morricone score.'})


db.movieDetails.find({id:'569190ca24de1e0ce2dfcd4f'})

db.movieDetails.find({year: 2013, rated: 'PG-13', "awards.wins": 0}).pretty()

db.movieDetails.find({ "genres": ["Comedy", "Crime"] })

db.movieDetails.find({ "genres": { $all: ["Comedy", "Crime"] } })

db.movieDetails.updateMany({ year: {$gte: 2010, $lte: 2013},
                             "imdb.votes": {$lt: 10000},
                             $and: [{"tomato.consensus": {$exists: true} },
                                    {"tomato.consensus": null} ] },
                           { $unset: { "tomato.consensus": "" } });
