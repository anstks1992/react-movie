import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setloading] = useState(true);
  const [movies, setmovies] = useState([]);
  const getmovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    // const res = await fetch(
    //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    // );
    // const json = await res.json();
    setmovies(json.data.movies);
    setloading(false);
  };
  useEffect(() => {
    getmovies();
    // fetch(
    //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    // )
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setmovies(json.data.movies);
    //     setloading(false);
    //   });
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((item) => (
            <Movie
              key={item.id}
              id={item.id}
              coverImg={item.medium_cover_image}
              title={item.title}
              summary={item.summary}
              genres={item.genres}
            />
            // <div key={item.id}>
            //   <img src={item.medium_cover_image} />
            //   <h2>{item.title}</h2>
            //   <p>{item.summary}</p>
            //   <ul>
            //     <li>
            //       {item.genres.map((gen) => (
            //         <li key={gen}>{gen}</li>
            //       ))}
            //     </li>
            //   </ul>
            // </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
