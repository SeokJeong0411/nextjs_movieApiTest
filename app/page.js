import Movie from "@/components/Movie";
import styles from "./page.module.css";

export const metadata = {
  title: "Home | next Movies",
};

async function getMovies() {
  const res = await fetch(`http://localhost:3000/api/movies`, { cache: "no-store" });
  const { results } = await res.json();

  return results;
}

export default async function Home() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {!movies.length && <h4>Loading...</h4>}
      {movies.map((movie) => (
        <div key={movie.id} className={styles.movie}>
          <Movie movie={movie} />
        </div>
      ))}
    </div>
  );
}
