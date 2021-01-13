import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, interval} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Entry} from './interfaces/entry';
import {TimeSpan} from './interfaces/time-span';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Tour of Heroes';
  private destroyed$ = new Subject();
  private entry: Entry = {id: 'now', created: new Date()};

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.changeDetector.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  getElapsedTime(): TimeSpan {
    let totalSeconds = Math.floor((new Date().getTime() - this.entry.created.getTime()) / 1000);

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (totalSeconds >= 3600) {
      hours = Math.floor(totalSeconds / 3600);
      totalSeconds -= 3600 * hours;
    }

    if (totalSeconds >= 60) {
      minutes = Math.floor(totalSeconds / 60);
      totalSeconds -= 60 * minutes;
    }

    seconds = totalSeconds;

    return {
      hours,
      minutes,
      seconds
    };
  }
}
