import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HotelDTO } from '../dto';
import { FilterDTO } from '../dto/filter.dto';
import { HandleError, HttpErrorHandler } from './http-error-handler.service';

@Injectable()
export class HotelService implements OnInit, OnDestroy {
  private apiHotels = '';  // URL to web api
  private filterDTO: FilterDTO;
  private hotelDTO: HotelDTO;
  private searchResult: HotelDTO[];
  private handleError: HandleError;

  private filterObservable: Subject<FilterDTO>;
  private hotelObservable: Subject<HotelDTO>;
  private observables: Subject<HotelDTO[]>;

  constructor(private httpClient: HttpClient, httpErrorHandler: HttpErrorHandler, private logger: NGXLogger) {
    this.observables = new BehaviorSubject<HotelDTO[]>(new Array<HotelDTO>());
    this.filterObservable = new BehaviorSubject<FilterDTO>(null);
    this.hotelObservable = new BehaviorSubject<HotelDTO>(null);
    this.handleError = httpErrorHandler.createHandleError('HotelsService');
    this.apiHotels = environment.apiAlmundo + environment.apiHotels;
  }

  ngOnInit() {
    this.logger.error('ngOnInit => BusquedaBO');
  }

  public filter(): Observable<FilterDTO> {
    return this.filterObservable.asObservable();
  }

  public hotel(): Observable<HotelDTO> {
    return this.hotelObservable.asObservable();
  }

  public results(): Observable<HotelDTO[]> {
    return this.observables.asObservable();
  }

  public setFilter(dto: FilterDTO): void {
    this.filterDTO = dto;
    this.filterObservable.next(this.filterDTO);
  }

  public setHotel(dto: HotelDTO): void {
    this.hotelDTO = dto;
    this.hotelObservable.next(this.hotelDTO);
  }

  public setSearchResult(): void {
    this.observables.next(this.searchResult);
  }

  public clearFilter() {
    this.filterDTO = null;
    this.filterObservable.next();
  }

  public clearHotel() {
    this.hotelDTO = null;
    this.hotelObservable.next();
  }

  public clearSearch() {
    this.searchResult.length = 0;
    this.setSearchResult();
  }

  getHotelsAll(): void {
    this.httpClient.get<HotelDTO[]>(this.apiHotels).subscribe(list => {
      this.searchResult = list;
      this.setSearchResult();
    });
  }

  public search(dto: FilterDTO): void {
    this.filterDTO = dto;
    if (dto === undefined || (this.isEmpty(dto.name) && this.isEmptyList(dto.stars))) {
      this.clearSearch();
      this.getHotelsAll();
    } else {
      const url = this.apiHotels + '/filter';
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      this.logger.info('SEARCH => Se buscará los Hoteles con name: ' + dto.name);
      const term = dto.name.trim();
      this.httpClient.post<HotelDTO[]>(url, dto, httpOptions).subscribe(list => {
        this.searchResult = list;
        this.setSearchResult();
      });
    }
  }

  private isEmpty(str: string) {
    return (!str || 0 === str.length);
  }

  private isEmptyList(list: number[]) {
    return (!list || 0 === list.length);
  }

  ngOnDestroy() {
    this.logger.error('ngOnDestroy => BusquedaBO');
  }

}
