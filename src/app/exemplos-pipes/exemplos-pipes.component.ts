import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CamelCasePipe } from '../camel-case.pipe';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.scss',
  imports: [CommonModule, CamelCasePipe]
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

  livros: string[] = ['Angular', 'Laravel']
}
