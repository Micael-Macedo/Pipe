import { CamelCasePipe } from './../pipes/camel-case.pipe';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FiltroPipe } from '../pipes/filtro.pipe';
import { ArrayTransformPipe } from '../pipes/array-transform.pipe';
import { FormsModule } from '@angular/forms';
import { InpurePipePipe } from '../pipes/inpure-pipe.pipe';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.scss',
  imports: [CommonModule, CamelCasePipe, ArrayTransformPipe, InpurePipePipe, FormsModule]
})
export class ExemplosPipesComponent {
  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54821,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };
  @Input() filtro:string = ""
  livros: string[] = ['Angular', 'Laravel', 'Java']

  addCurso(livro: string){
    this.livros.push(livro)
    console.log(this.livros)
  }

  obterCursos(){
    if(this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros
    }

    return this.livros.filter((v) => {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true
      }
      return false
    });
  }
}
