import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FilterDTO } from '../dto';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.css']
})
export class HotelFilterComponent implements OnInit {
  private filter: FilterDTO = new FilterDTO('', []);

  @Output() upgradedFilter: EventEmitter<FilterDTO>;
  panelOpenState = true;
  starsChecks: boolean[] = [true, false, false, false, false, false];
  textFilter: string;
  widhtScreen = 992;

  constructor(private app: AppComponent) {
    this.upgradedFilter = new EventEmitter<FilterDTO>();
  }

  ngOnInit() {
  }

  onClickedStar(index: number) {
    if (this.starsChecks[0] && index === 0) {
      this.starsChecks.fill(false);
      this.starsChecks[0] = true;
    } else if (!this.starsChecks[0] && index === 0) {
      this.starsChecks[1] = true;
    } else if (!this.starsChecks.find(e => e)) {
      this.starsChecks[0] = true;
    } else if (index > 0) {
      this.starsChecks[0] = false;
    }
    this.filter.stars = [];
    if (!this.starsChecks[0]) {
      for (let i = 1; i < this.starsChecks.length; i++) {
        if (this.starsChecks[i]) {
          this.filter.stars.push(6 - i);
        }
      }
    }
    this.emitirUpgradedFilter(this.filter);
  }

  // Eventos Lanzados
  public search(searchTerm: string) {
    this.filter.name = searchTerm;
    this.emitirUpgradedFilter(this.filter);
  }

  protected emitirUpgradedFilter(dto: FilterDTO): void {
    this.upgradedFilter.emit(dto);
  }



}
