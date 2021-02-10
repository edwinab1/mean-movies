import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/movies';
import { HttpMoviesService } from 'src/app/services/http-movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movies[]

  constructor(
    private moviehttp: HttpMoviesService
  ) { }

  ngOnInit(): void {
    this.readMovies();
  }

  readMovies() {
    this.moviehttp.read('movies/read')
      .subscribe(result => {
        if (result.ok) {
          this.movies = result.data
        }
      })
  }

  hoverMovie(movie: Movies) {
    console.log('Movie ', movie.title)
  }

}
