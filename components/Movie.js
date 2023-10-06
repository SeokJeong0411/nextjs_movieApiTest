"use client";

import { useRouter } from "next/navigation";

export default function Movies({ movie }) {
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/movie/${id}`);
  };

  return (
    <div>
      <div key={movie.id}>
        <img onClick={() => onClick(movie.id)} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <h4 onClick={() => onClick(movie.id)}>{movie.original_title}</h4>
      </div>
    </div>
  );
}
