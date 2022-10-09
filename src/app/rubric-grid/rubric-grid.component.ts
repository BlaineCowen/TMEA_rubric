import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rubric-grid',
  templateUrl: './rubric-grid.component.html',
  styleUrls: ['./rubric-grid.component.scss']
})
export class RubricGridComponent implements OnInit {
  pitchScore: number = 0;
  rhythmScore: number = 0;
  toneScore: number = 0;
  pronunciationScore: number = 0;
  musicalityScore: number = 0;

  
  constructor() { }
  
  // when an item is clicked, this function is called
  // with the item as a parameter
  onItemClicked(item: any) {
    console.log(item);
  }

  setPitchScore(score: number) {
    this.pitchScore = score;
    console.log("pitch score: " + this.pitchScore);    
  }


  ngOnInit(): void {
  }

}
