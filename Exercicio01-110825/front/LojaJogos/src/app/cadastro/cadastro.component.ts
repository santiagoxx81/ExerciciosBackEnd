import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core'; // Importe ViewChild
import { FormsModule, NgForm } from '@angular/forms'; // Importe NgForm
import { CadastroService, InterfaceCadastro } from '../service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {

  @ViewChild('form') form!: NgForm; // Pega a referência do formulário do HTML

  jogos: InterfaceCadastro[] = [];
  jogo: InterfaceCadastro = { nome: '', tipo: '', ano: '' };
  editando = false; 
  idEdicao = 0;

  constructor(private service: CadastroService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.service.listarJogos().subscribe(data => this.jogos = data);
  }

  salvar() {
    this.service.addJogo(this.jogo).subscribe(() => {
      // this.jogo = { nome: '', tipo: '', ano: '' }; // O reset do form faz isso
      this.form.resetForm();
      this.listar();
    });
  }

  editar() {
    this.service.editJogo(this.idEdicao, this.jogo).subscribe(() => {
      // this.jogo = { nome: '', tipo: '', ano: '' };
      this.form.resetForm();
      this.editando = false; 
      this.listar();
    });
  }
  
  excluir(id: number) {
    if (confirm('Tem certeza que deseja excluir este jogo?')) {
      this.service.deletarJogo(id).subscribe(() => {
        console.log('Jogo excluído com sucesso!');
        this.listar();
      });
    }
  }

  prepararEdicao(jogoParaEditar: InterfaceCadastro) {
    this.editando = true;
    this.idEdicao = jogoParaEditar.id!;
    this.jogo = { ...jogoParaEditar };
  }
}