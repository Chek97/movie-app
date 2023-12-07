import { Component } from '@angular/core';
import { movies } from 'src/data/movieData';
import { IMovie } from 'src/interfaces';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  movies: IMovie[] = [];
  watchList: IMovie[] = [];

  // Init data lists
  ngOnInit(): void {
    this.movies = movies;
    this.getWatchList();
  }

  // Search movie by title
  getMoviesByName() {
    this.movies.sort((a: any, b: any) => {
      if (a.title > b.title) return 1;

      if (a.title < b.title) return -1;

      return 0;
    });
  }

  // Search movie by release date
  getMoviesByDate() {
    this.movies.sort((a: any, b: any) => {
      if (a.releasedDate > b.releasedDate) return 1;

      if (a.releasedDate < b.releasedDate) return -1;

      return 0;
    });
  }

  // Get watchList from localstorage
  getWatchList() {
    let watchList = JSON.parse(localStorage.getItem('watchList') || "[]");
    this.watchList = watchList;
  }

  // Add movie to watchList
  addToList(movie: IMovie) {
    let newList = [...this.watchList, movie];
    localStorage.setItem('watchList', JSON.stringify(newList));
    this.getWatchList();
  }

  // Check if movie is in watchList
  checkList(movie: IMovie) {
    let valid = this.watchList.some((m: IMovie) => m.title === movie.title);
    return valid;
  }
}
