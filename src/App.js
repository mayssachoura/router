
import './App.css';
import MovieCard from './Components/MovieCard'; 
import MovieList from './Components/MovieList'
import { useState } from 'react';
import { Nav} from "react-bootstrap";
import Filter from './Components/Filter';
import AddMovie from './Components/AddMovie';
import Trailer from './Components/Trailer';
import {

  BrowserRouter as Router, Switch, Route,Link, useRouteMatch,useParams} from "react-router-dom";
function App() {
  const [movie,setMovie]=useState( [
    {
      'id':"1",
      'title': "Snow White and the Seven Dwarfs ",
      'description': "A beautiful girl, Snow White, takes refuge in the forest in the house of Seven Dwarfs to hide from her stepmother, the wicked Queen. The Queen is jealous because she wants to be known as the fairest in the land, and Snow White’s beauty surpasses her own. The Dwarfs grow to love their unexpected visitor, who cleans their house and cooks their meals. But one day when they are at their diamond mine, the Queen arrives at the cottage, disguised as an old peddler woman, and she persuades Snow White to bite into a poisoned apple. ",
      'posterUrl': "https://lumiere-a.akamaihd.net/v1/images/p_snowwhiteandthesevendwarfs_19871_806c8934.jpeg", 
      'rating': "4.9",
      'trailerLink':"https://www.youtube.com/embed/w0rj2uyWdpU" 

      },
      {
        'id':"2",

        'title': "Cindrella",
        'description': "Animated feature; the famous rags-to-riches tale of a beautiful girl reduced to being a servant by her jealous Stepmother and Stepsisters, Anastasia and Drizella. With the help of a bit of magic by her Fairy Godmother, Cinderella is given a beautiful dress and use of a magnificent coach, and is able to attend a royal ball and inadvertently fall in love with the prince. Fleeing the ball at midnight, the hour when the magic spell is due to end, she leaves behind a glass slipper that the prince and Grand Duke use to search her out. With the help of her little mice and bird friends, she is discovered and assured a happy future. ",
        'posterUrl': "https://m.media-amazon.com/images/I/51hTyQkd78L._AC_.jpg",
        'rating': "4.8",
        'trailerLink':"https://www.youtube.com/embed/cL-RjWKtZrM"


        },
        {
          'id':"3",

          'title': "Sleeping Beauty ",
          'description': "  In spectacular style, the film recounts the simple story of Princess Aurora, who is cursed by the evil fairy Maleficent to die before the sun sets on her sixteenth birthday by pricking her finger on the spindle of a spinning wheel. Despite the loving attempts of the three good but often bumbling fairies, Flora, Fauna, and Merryweather, the curse is fulfilled. The good fairies put everyone in the castle into a deep sleep until the spell can be broken. It is only with the aid of Prince Phillip that Maleficent, transformed into a towering, fire-breathing dragon, is destroyed, and the Sleeping Beauty is awakened by a kiss. Released January 29, 1959. ",
          'posterUrl': "https://c8.alamy.com/comp/JTEDND/movie-poster-sleeping-beauty-1959-JTEDND.jpg",
          'rating': "4.6",
          'trailerLink':"https://www.youtube.com/embed/CfsyUyi_FJM"

          },
     
      {
        'id':"4",

        'title': "Dumbo",
        'description': "Dumbo (film) A baby circus elephant is born with huge ears, and named Dumbo. He and his mother suffer humiliation from the other elephants and from the kids visiting the circus. But humiliation turns to triumph as Dumbo is surprised to discover through the help of his faithful mouse friend, Timothy, that he can use the oversized ears to fly. Released on October 23, 1941. Directed by Ben Sharpsteen. From a story by Helen Aberson and Harold Pearl. 64 min.",
        'posterUrl': "https://i.pinimg.com/originals/47/94/ce/4794cec6bbea574a06f4a932debaf826.jpg",
        'rating': "4.7",
        'trailerLink':"https://www.youtube.com/embed/tLtQ3bCvBA0"

        },
        {
          'id':"5",

          'title': "Bambi",
          'description': "Life story of a fawn, Bambi, who grows up, with friends Thumper, the rabbit, and Flower, the skunk, to be the Great Prince of the Forest. But in the meantime he suffers through the death of his mother at the hand of hunters, falls in love with Faline, and barely escapes a catastrophic forest fire. World premiere in London on August 9, 1942; released in the U.S. on August 13, 1942. Based on the book by Felix Salten. The supervising director was David Hand. " ,
          'posterUrl': "https://m.media-amazon.com/images/I/51ZNE4vBtcL._AC_.jpg",
          'rating': "4",
          'trailerLink':"https://www.youtube.com/embed/suAZVUatuH0"

          },
       
            {
              'id':"6",

              'title': "Peter Pan",
              'description': " Story of the magical boy who wouldn’t grow up who teaches the three Darling children—Wendy, John, and Michael—to fly to Never Land with him where they embark on adventures with the chief inhabitants, Captain Hook and his crew of pirates. The fairy, Tinker Bell, is jealous of Peter’s attentions to Wendy, and duped into helping Captain Hook. After rescuing the Indian princess, Tiger Lily, Peter must save his band, the Lost Boys, and the Darlings from Hook. Released on February 5, 1953. ",
              'posterUrl': "https://m.media-amazon.com/images/I/71+02eGfm6L._AC_SY606_.jpg",
              'rating': "5",
              'trailerLink':"https://www.youtube.com/embed/5K83Ix1R9Mc"

              },
           
          {
            'id':"7",

            'title': "Alice In Wonderland",
            'description': "Fantasyland dark ride attraction at Disneyland, opened on June 14, 1958. Closed from September 6, 1982 to April 13, 1984 for a major remodelling. Kathryn Beaumont, who provided the voice for Alice in the 1951 motion picture, was brought back at that time to record narration tracks for the attraction.",
            'posterUrl': "https://m.media-amazon.com/images/I/61bQK9TywiL._AC_.jpg",
            'rating': "3.8",
            'trailerLink':"https://www.youtube.com/embed/KZiYYflms-w"

            },
              
                {
                  'id':"8",

                  'title': "Pinocchio",
                  'description': " Geppetto, a poor Italian carpenter, makes out of a piece of wood a puppet that weeps, laughs and talks like a child, a puppet that he names Pinocchio and that he loves like the son he never had. Disobedient, sometimes a liar, Pinocchio will find himself drawn into many adventures. ",
                  'posterUrl': "https://lumiere-a.akamaihd.net/v1/images/p_pinocchio_19879_d6304938.jpeg",
                  'rating': "4.5",
                  'trailerLink':"https://www.youtube.com/embed/GBgyVY_ClzQ"

                  },
                  {
                    'id':"9",

                    'title': "Toy Story",
                    'description': "is a 2014 romantic comedy-drama film directed by Christian Ditter from a screenplay by Juliette Towhidi, based on the 2004 novel Where Rainbows End by Irish author Cecelia Ahern.",
                    'posterUrl': "https://m.media-amazon.com/images/I/61E15fy6nxL._AC_SL1000_.jpg",
                    'rating': "4.7",
                    'trailerLink':"https://www.youtube.com/embed/rNk1Wi8SvNc"

                    },
    ])
    const [searchMovie,setSearchMovie]= useState(movie)
    const handleSearch=(search)=>{
        setSearchMovie(movie.filter((item) => { return item.title.toLowerCase().includes(search.toLowerCase()); }))
     // setSearchMovie(movie.filter((item) => { return item.rating === search}));
      }

    const addMovie=(film)=>{
      setMovie([...movie, film]);
      }
      return (
        <>
        <Router>
        <div>
        <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        </ul>
        <hr />
        <Switch>
        <Route exact path="/">
        <br></br>
        <Filter movies={movie} FnSearch={handleSearch} ></Filter>
        <br></br>
        <MovieList movies={searchMovie}></MovieList>
        <br></br>
        <AddMovie addMovie={addMovie}></AddMovie>
        </Route>
        <Route path="/Trailer/:id">
        <Trailer  movies={movie}></Trailer>
        </Route>
        </Switch>
        </div>
        </Router>
        </>
        
        );
        
        
}

export default App;