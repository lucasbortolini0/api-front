// tema.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  private temaAtual = new BehaviorSubject<boolean>(false);

  get temaAtual$() {
    return this.temaAtual.asObservable();
  }

  toggleTema() {
    const novoTema = !this.temaAtual.value;
    this.temaAtual.next(novoTema);
  }
}
