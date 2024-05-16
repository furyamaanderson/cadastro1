import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  
  // Definindo a tipagem das propriedades
  form: FormGroup;
  varejo: FormControl;
  atacado: FormControl;
  custo: FormControl;
  codigo: FormControl;
  nome: FormControl;
  codigoReduzido: FormControl;
  marca: FormControl;
  grupo: FormControl;
  subgrupo: FormControl;
  estoqueDisponivel: FormControl;
  estoqueMinimo: FormControl;
  estoqueMaximo: FormControl;
  resultado = 0;
  resultado2 = 0;
  cadastrado = false;


  // Construtor da tipagem, passando como parãmetro o form control e validando os formulários
  constructor() {
    this.varejo = new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]);
    this.atacado = new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]);
    this.custo = new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]);
    this.codigo = new FormControl('', [Validators.required, Validators.minLength(9), Validators.pattern(/^\d+$/)]);
    this.nome = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.codigoReduzido = new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^\d+$/)]);
    this.marca = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.grupo = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.subgrupo = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.estoqueDisponivel = new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^\d+$/)]);
    this.estoqueMinimo = new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^\d+$/)]);
    this.estoqueMaximo = new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/^\d+$/)]);

  //Parâmetro para a propriedade form, definido como formGroup
    this.form = new FormGroup({
      varejo: this.varejo,
      atacado: this.atacado,
      custo: this.custo,
      codigo: this.codigo,
      nome: this.nome,
      codigoReduzido: this.codigoReduzido,
      marca: this.marca,
      grupo: this.grupo,
      subgrupo: this.subgrupo,
      estoqueDisponivel: this.estoqueDisponivel,
      estoqueMinimo: this.estoqueMinimo,
      estoqueMaximo: this.estoqueMaximo
    });
  }
  
  
  // Função de cálculo automático 
  ngOnInit() {
    this.calcular();

    // Atualiza o cálculo sempre que houver mudança nos valores
    this.varejo.valueChanges.subscribe(() => {
      this.calcular();
    });

    this.atacado.valueChanges.subscribe(() => {
      this.calcular();
    });

    this.custo.valueChanges.subscribe(() => {
      this.calcular();
    });
  }
  // Função de cálculo
  calcular() {
    const varejoValue = this.varejo.value !== null ? parseFloat(this.varejo.value) : 0; 
    const atacadoValue = this.atacado.value !== null ? parseFloat(this.atacado.value) : 0;
    const custoValue = this.custo.value !== null ? parseFloat(this.custo.value) : 0;
    this.resultado = atacadoValue - custoValue;
    this.resultado2 = varejoValue - custoValue; // Corrigido para usar resultado2
  }

  // Função de click do botão de cadastro 
  cadastrar() {
    if (this.form.valid) {
      
      console.log('Formulário válido, enviando...');

      // Limpa o formulário
      this.form.reset();

      
    } else {
      // Marcar os controles inválidos como "touched" para exibir os estilos de erro
      this.markFormGroupTouched(this.form);
      console.log('Formulário inválido, verifique os campos.');
    }
  }
  // Marca os controles inválidos como "touched" através do formGroup, percorre todos os campos do formulário para validação
  markFormGroupTouched(formGroup: FormGroup) { 
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
