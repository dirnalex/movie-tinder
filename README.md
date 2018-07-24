# movie-tinder

## Objective
Create a single-page application for selecting a movie to watch using your phone.

## Functional description
- Assume you have a backend that returns the following data structure on GET on /recommendations
```
[
  {
    id: “1and3011”,
    imageURL: “https://pl.wikipedia.org/wiki/Gwiezdne_wojny:_Przebudzenie_Mocy#/media/File:R2D2_(22213548240).jpg”,
    title: “Inferno”,
    summary: “Lorem ipsum....”,
    rating: 5.3
  }, 
  {
    id: “2301abc”,
    imageURL: “https://upload.wikimedia.org/wikipedia/commons/f/f1/SWCA_-_Stormtrooper_from_Force_Awakens_%2817202865375%29.jpg”,
    title: “Star Wars: Episode VII - The Force Awakens”,
    summary: “Lorem ipsum....”,
    rating 8.2
  }, (feel free to add more items)
]
```
- The application should show the movie titles, image, summary and rating.
- The user can accept or reject the suggestion. Accepting is done by green button. Rejecting is
done by red button or swipe.
- The backend gets notified on user’s decision by a PUT call to /recommendations/<id>/accept
or /recommendations/<id>/rejectURL.

## Technical requirements
- Needs to be structured like any other modern javascript application
- Needs to look and work ok on the mobile phone (Android with Chrome) and normal browser (Chrome)
- Framework:
	- React or Angular
	- Redux
- SASS
