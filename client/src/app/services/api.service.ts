import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Search, Detail } from '../interfaces/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = environment.api.base;
  }

  /**
   * GET to API searching for items with provided key words
   * @param words searched words
   * @returns Observable
   */
  fetchItems(words: string): Observable<Search> {
    const path = environment.api.searchPath;
    const options = { params: new HttpParams({ fromString: 'q=' + words }) };
    return this.http.get<Search>(this.baseURL + path, options);
  }

  /**
   * GET to API searching for item details with provided id
   * @param id searched id
   * @returns Observable
   */
  fetchItemDetails(id: string): Observable<Detail> {
    const path = environment.api.detailPath + id;
    return this.http.get<Detail>(this.baseURL + path);
  }
}
