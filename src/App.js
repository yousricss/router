import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Movies from './components/Movies';
import MoviesDetails from './components/MoviesDetails';


function App() {
  const movies= [
   
    {
        id:0,
        title:"Nomadland",
        posterurl:"https://fr.web.img5.acsta.net/pictures/21/04/29/09/49/2883699.jpg",
        rate:4,
        description:"Nomadland is a 2020 American drama film based on the 2017 non-fiction book Nomadland: Surviving America in the Twenty-First Century by Jessica Bruder.",
        trailer:"https://youtu.be/6sxCFZ8_d84"
    },
    {
        id:1,
        title:"Joker",
        posterurl:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/393a1c86214511.5d92f6e1e9213.png",
        rate:4.5,
        description:"is a 2019 American psychological thriller movie directed by Todd Phillips, who co-wrote the screenplay with Scott Silver.",
        trailer:"https://youtu.be/_LUWnjT3iks"
    },
    {
        id:2,
        title:"Game of Thrones",
        posterurl:"https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
        rate: 4.3,
        description:"Game of Thrones est une série télévisée dramatique américaine créée par David Benioff et D. B. Weiss pour HBO.",
        trailer:"https://youtu.be/gcTkNV5Vg1E"
    },
    {
        id:3,
        title:"Fast and Furious 8",
        posterurl:"https://fr.web.img3.acsta.net/pictures/17/03/03/17/27/305158.jpg",
        rate: 4.2,
        description:"Fast and Furious 8 alternatively known as F8 and Fast and Furious 8 internationally is a 2017 American action thriller film directed by F. Gary Gray and written by Chris Morgan.",
        trailer:"https://youtu.be/yNIdRY6By7U"
    },
    {
        id:4,
        title:"Hitman and Bodyguard ",
        posterurl:"https://global-img.gamergen.com/hitman-bodyguard-2-affiche-poster_0000978115.jpg",
        rate:4.8,
        description:"Hitman and Bodyguard 2  is an American action film directed by Patrick Hughes and slated for release in 2021. It follows Hitman and Bodyguard, by the same director, released in 2017.",
        trailer:"https://youtu.be/dpPZwA6m7gI"
    },
    {
        id:5,
        title:"Helios",
        posterurl:"https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Heliosfilm.jpg/220px-Heliosfilm.jpg",
        rate:4,
        description:"Helios is a 2015 Hong Kong-Chinese crime thriller film directed by Longman Leung and Sunny Luk and starring an international ensemble cast from Hong Kong, China, Taiwan and South Korea. The film was released on 30 April 2015 in China and 1 May 2015 in Hong Kong.",
        trailer:"https://youtu.be/1FSM3xuGxxM"
    },

];
  return (
    <div className="App">
      <Router>
      <Navbar/>

        <Switch>
        <Route path="/" exact component={Home}/>

        <Route path="/movies"  render={() => <Movies movies={movies} exact/>}/>
        <Route path="/movies/:id"  render={(props)=> <MoviesDetails {...props} movies={movies} exact/>}/>

        </Switch>
        

      </Router>
    </div>
  );
}

export default App;
