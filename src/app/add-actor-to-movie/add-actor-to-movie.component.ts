import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-actor-to-movie',
  templateUrl: './add-actor-to-movie.component.html',
  styleUrls: ['./add-actor-to-movie.component.css']
})
export class AddActorToMovieComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router) { }
  moviesDB: any[] = [];
  actorsDB: any[] = [];
  
  selectedActor: any;
  selectedMovie: any;

  ngOnInit() {
    this.onGetMovies();
    this.onGetActors();
  }

  onGetMovies(){
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  onGetActors(){
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    })
  }

  onAddActorToMovie(){
    this.dbService.addActorToMovie(this.selectedMovie._id, this.selectedActor._id).subscribe(result => {
      this.router.navigate(["/listactors"]);
    });
  }

  selectActor(actor){
    this.selectedActor = actor;
  }

  selectMovie(movie){
    this.selectedMovie = movie;
  }

}
