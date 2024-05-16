import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auditar',
  templateUrl: './auditar.component.html',
  styleUrl: './auditar.component.scss'
})
export class AuditarComponent {

  form: FormGroup;
  code: FormControl;
  name: FormControl;
  type_stock: FormControl;
  quantity: FormControl;
  accumulate: FormControl;


  constructor(){
    this.accumulate = new FormControl("", [Validators.required, Validators.pattern(/^[SN]$/i)])
    this.code = new FormControl("", [Validators.required, Validators.minLength(6), Validators.pattern(/^\d+$/)]);
    this.name = new FormControl({value: '', disabled: true}, Validators.required);
    this.type_stock = new FormControl("", [Validators.required, Validators.min(1), Validators.max(5), Validators.pattern(/^\d+$/)]);
    this.quantity = new FormControl("", [Validators.required, Validators.minLength(1), Validators.pattern(/^\d+$/)]);


    this.form = new FormGroup({
      accumulate: this.accumulate,
      code: this.code,
      name: this.name,
      type_stock: this.type_stock,
      quantity: this.quantity
    })
  }

  

  auditar() {
    if (this.form.valid) {
      
      console.log('Formulário válido, enviando...');

      // Obter os valores dos campos do formulário
      const codigo = this.form.get('code')?.value;
      const nome = this.form.get('name')?.value;
      const codigoEstoque = this.form.get('type_stock')?.value;
      const quantidade = this.form.get('quantity')?.value;

    // Atualizar os elementos da div relatório
      const item1 = document.querySelector('.item-1') as HTMLHeadingElement;
      const item2 = document.querySelector('.item-2') as HTMLHeadingElement;
      const item3 = document.querySelector('.item-3') as HTMLHeadingElement;
      const item4 = document.querySelector('.item-4') as HTMLHeadingElement;

    if (item1 && item2 && item3 && item4) {
      item1.textContent = codigo;
      item2.textContent = nome;
      item3.textContent = codigoEstoque;
      item4.textContent = quantidade;
    }


      // Limpa o formulário
      this.form.reset();

      
    } else {
      // Marcar os controles inválidos como "touched" para exibir os estilos de erro
      this.markFormGroupTouched(this.form);
      console.log('Formulário inválido, verifique os campos.');
    }

    

  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}


  
