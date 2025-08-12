import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface InterfaceCadastro{
  id?:number;
  nome:string;
  tipo:string;
  ano: string;
}

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private api='http://localhost:3008/jogos'

  constructor(private http: HttpClient) { }

  listarJogos():Observable<InterfaceCadastro[]>{
    return this.http.get<InterfaceCadastro[]>(this.api)
  }
  addJogo(jogo:InterfaceCadastro):Observable<any>{
    return this.http.post(this.api, jogo)
  }
  editJogo(id: number, jogo:InterfaceCadastro):Observable<any>{
    return this.http.put(`${this.api}/${id}`, jogo)
  }
  deletarJogo(id:number):Observable<any>{
    return this.http.delete(`${this.api}/${id}`)
  }
}
