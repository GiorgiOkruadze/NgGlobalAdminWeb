import { Injectable,EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  //loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loadingSub:EventEmitter<boolean> = new EventEmitter();
  loadingMap: Map<string, boolean> = new Map<string, boolean>();

  constructor() { }

  setLoading(loading: boolean, url: string): void {
    if (loading === true) {
      this.loadingMap.set(url, loading);
      this.loadingSub.emit(true);
    }else if (loading === false && this.loadingMap.has(url)) {
      this.loadingMap.delete(url);
    }
    if (this.loadingMap.size === 0) {
      this.loadingSub.emit(false);
    }
  }
}
