// shared.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

    anos: number[] = [];
    
    selectAnos(){
        const anoCorrente = new Date().getFullYear();
        for (let ano = anoCorrente; ano >= 1920; ano--) {
            this.anos.push(ano);
        }
    }

  // Adicione outros métodos reutilizáveis conforme necessário
}
