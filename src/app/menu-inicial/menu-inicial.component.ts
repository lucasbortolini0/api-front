import { Component } from '@angular/core';
import { TemaService } from '../services/tem.service';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrl: './menu-inicial.component.css'
})
export class MenuInicialComponent {

  temaAtual: boolean = false;
  mostrarFormularioCliente: boolean = false;
  mostrarFormularioDocumento: boolean = false;
  mostrarFormularioProprietario: boolean = false;
  mostrarFormularioVeiculo: boolean = false;
  mostrarFormularioVenda: boolean = false;
  mostrarFormularioVendedor: boolean = false;
  mostrarFormularioConsultaVeiculo: boolean = false;

  constructor(private temaService: TemaService) {
    this.temaService.temaAtual$.subscribe((tema) => {
      this.temaAtual = tema;
    });
  }

  toggleTema() {
    this.temaService.toggleTema();
  }

  acaoOpcao(opcao: string) {
    const acoes: { [key: string]: () => void } = {
      'Cliente': () => this.mostrarFormulario('Cliente'),
      'Documento': () => this.mostrarFormulario('Documento'),
      'Proprietario': () => this.mostrarFormulario('Proprietario'),
      'Veiculo': () => this.mostrarFormulario('Veiculo'),
      'Venda': () => this.mostrarFormulario('Venda'),
      'Vendedor': () => this.mostrarFormulario('Vendedor'),
      'Consultar Veiculo': () => this.mostrarFormulario('ConsultaVeiculo'),
    };

    const acao = acoes[opcao];
    if (acao) {
      acao();
    } else {
      console.warn('Ação não mapeada:', opcao);
    }
  }

  mostrarFormulario(tipo: string) {
    // Reinicia todas as variáveis de mostrarFormulario para false
    this.reiniciarVariaveisMostrarFormulario();

    // Define a variável correspondente ao tipo de formulário como true
    switch (tipo) {
      case 'Cliente':
        this.mostrarFormularioCliente = true;
        break;
      case 'Documento':
        this.mostrarFormularioDocumento = true;
        break;
      case 'Proprietario':
        this.mostrarFormularioProprietario = true;
        break;
      case 'Veiculo':
        this.mostrarFormularioVeiculo = true;
        break;
      case 'Venda':
        this.mostrarFormularioVenda = true;
        break;
      case 'Vendedor':
        this.mostrarFormularioVendedor = true;
        break;
      case 'ConsultaVeiculo':
        this.mostrarFormularioConsultaVeiculo = true;
        break;
    }
  }

  reiniciarVariaveisMostrarFormulario() {
    this.mostrarFormularioCliente = false;
    this.mostrarFormularioDocumento = false;
    this.mostrarFormularioProprietario = false;
    this.mostrarFormularioVeiculo = false;
    this.mostrarFormularioVenda = false;
    this.mostrarFormularioVendedor = false;
    this.mostrarFormularioConsultaVeiculo = false;
  }
}


  /*acaoOpcao(opcao: string) {
    switch (opcao) {
      case 'Cliente':
        this.dialogService.openCadastroCliente().subscribe(result => {
          console.log(result); // Faça algo com o resultado se necessário
        });
        break;
      case 'Documento':
        this.dialogService.openCadastroDocumento().subscribe(result => {
          console.log(result); // Faça algo com o resultado se necessário
        });
        break;
      case 'Proprietario':
        this.dialogService.openCadastroProprietario().subscribe(result => {
          console.log(result); // Faça algo com o resultado se necessário
        });
        break;
        case 'Veiculo':
          this.dialogService.openCadastroVeiculo().subscribe(result => {
            console.log(result); // Faça algo com o resultado se necessário
          });
          break;
        case 'Venda':
          this.dialogService.openCadastroVenda().subscribe(result => {
            console.log(result); // Faça algo com o resultado se necessário
          });
          break;
        case 'Vendedor':
          this.dialogService.openCadastroVendedor().subscribe(result => {
            console.log(result); // Faça algo com o resultado se necessário
          });
          break;
        case 'Consultar Veiculo':
        this.dialogService.openConsultaVeiculo().subscribe(result => {
          console.log(result); // Faça algo com o resultado se necessário
        });
        break;  
      // Adicione casos para os demais tipos de cadastro
      default:
        break;
    }
  }*/

