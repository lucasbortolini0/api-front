import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../utils/utils';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrl: './cadastro-veiculo.component.css'
})
export class CadastroVeiculoComponent {

  veiculoForm: FormGroup;
  salvarBtnColor: string = 'primary';
  
  tiposCombustivel = [
    { value: '1', viewValue: 'Gasolina' },
    { value: '2', viewValue: 'Álcool' },
    { value: '3', viewValue: 'Flex' },
    { value: '4', viewValue: 'Elétrico' },
    { value: '5', viewValue: 'Híbrido' }
  ];

  acaoBlindados = [
  { value: '1', viewValue: 'Sim' },
  { value: '2', viewValue: 'Não' },  
  ];

  tiposMontas = [
    { value: '1', viewValue: 'Pequena' },
    { value: '2', viewValue: 'Média' },
  ];

  statusVendas = [
    { value: '1', viewValue: 'Livre' },
    { value: '2', viewValue: 'Em negociação' },
    { value: '3', viewValue: 'Vendido' },    
  ];

  categorias = [
    { value: '1', viewValue: 'Moto' },
    { value: '2', viewValue: 'Carro' },
    { value: '1', viewValue: 'Caminhão' },
  ];


  constructor(
    private formBuilder: FormBuilder,    
    private snackBar: MatSnackBar,
    public sharedService: SharedService
  ) {
    this.veiculoForm = this.formBuilder.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      ano: ['', Validators.required],
      chassi: ['', Validators.required],
      categoria: ['',Validators.required],
      valor: ['', Validators.required],
      tipoMonta: ['', Validators.required],
      blindado: ['', Validators.required],
      fipe: ['', Validators.required],
      tipoCombustivel: ['', Validators.required],
      informacoesGerais: [''],
      statusVenda: ['', Validators.required]
    });   
  }

  ngOnInit(): void {
    // Chame o método selectAnos ao inicializar o componente
    this.sharedService.selectAnos();
  }

  // Adicione este método para lidar com a alteração do tipo de combustível
  onTipoCombustivelChange(event: any): void {
    // Você pode acessar o valor selecionado usando event.value
    console.log('Tipo de Combustível selecionado:', event.value);
  }

  onBlindadoChange(event: any): void{
    console.log('Blindado:', event.value);
  }

  onTipoMontaChange(event: any): void {
    console.log('Tipo de Monta:', event.value);
  }

  onStatusVendaChange(event: any): void {
    console.log('Status Venda:', event.value);
  }

  onTipoCategoriaChange(event:  any): void{
    console.log('Categoria:', event.value);
  }

  salvarVeiculo(): void {
    if (this.veiculoForm.valid) {
      // Lógica de salvamento aqui

      // Altera a cor para verde
      this.salvarBtnColor = 'success';

      this.snackBar.open('Veículo salvo com sucesso!', 'Fechar', {
        duration: 3000,
        panelClass: ['custom-snackbar', 'success-snackbar']
      });

      // Fechar o diálogo
      // this.dialogRef.close(true);
    } else {
      // Exibir Snackbar como erro
      this.snackBar.open('Por favor, preencha todos os campos obrigatórios.', 'Fechar', {
        duration: 3000,
        panelClass: ['custom-snackbar', 'error-snackbar']
      });
    }
  }

  buscarMarcas(){
    //usando API externa https://apigratis.com/documentacoes
  }

  buscarModelos(){
    //usando API externa https://apigratis.com/documentacoes
  }
}
