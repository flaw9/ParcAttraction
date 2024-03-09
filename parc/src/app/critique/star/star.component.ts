import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {DecimalPipe, JsonPipe, NgForOf} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [
    MatIcon,
    NgForOf,
    MatTooltip,
    DecimalPipe,
    JsonPipe
  ],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent {
  _numStars: number[] = [1, 2, 3, 4, 5];
  @Input() rating: number = 0;
  @Input() set numStars(num: number) {
    this._numStars = Array(num).fill(1).map((x, i) => i+1);
  }
  @Input() readonly: boolean = true;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();
  
  public setRating(rating: number) {
    if (!this.readonly) {
      this.rating = rating;
      this.ratingChange.emit(rating);
    }
  }

  /**
   * Get the icon for the star between 'star', 'star_half' and 'star_border'
   * For instance, if the rating is between 2.3 and 2.7, and numstar is 3, the icon will be 'star_half'
   * Else if the rating is 2.8 or more, the icon will be 'star'
   * If the rating is 2.2 or less, the icon will be 'star_border'
   * @param numStar
   */
  public getIcon(numStar: number): string {
    if (this.rating >= numStar) {
      return 'star';
    } else if (this.rating >= numStar - 0.5) {
      return 'star_half';
    } else {
      return 'star_border';
    }
  }

  protected readonly String = String;
}
