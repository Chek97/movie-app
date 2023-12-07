import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movies } from 'src/data/movieData';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movie: any;
  video: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((res: any) => {
      this.movie = movies.find(movie => movie.title === res.id);
      const url = this.movie.trailer;
      const videoId = url.substring(url.lastIndexOf("=") + 1);
      this.video = videoId;
      console.log(this.video);
      
    });

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
}
