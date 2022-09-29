import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    return this.http.post<any>(`${API_PATH}ProductList`, data);
  }

  getProduct() {
    return this.http.get<any>(`${API_PATH}ProductList`);
  }

  putProduct(data: any, id: number) {
    return this.http.put(`${API_PATH}ProductList/` + id, data);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(`${API_PATH}ProductList/` + id);
  }
}
