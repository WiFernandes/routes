import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponentPricipal implements OnInit{
constructor(private httpClient: HttpClient){}

USERS = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "sincere@april.biz",
    "phone": "1-770-736-8031 x56442"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "email": "shanna@melissa.tv",
    "phone": "010-692-6593 x09125"
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "email": "nathan@yesenia.net",
    "phone": "1-463-123-4447",
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "email": "julianne@kory.org",
    "phone": "493-170-9623 x156"
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "email": "lucio@annie.ca",
    "phone": "(254)954-1289"
  },
  {
    "id": 6,
    "name": "Mrs. Dennis",
    "email": "karley@jasper.info",
    "phone": "1-477-935-8478 x6430"
  }
];

public openPDF(): void {
  let DATA: any = document.getElementById('htmlData');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF();
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('angular-demo.pdf');
  });
}
public convertToPDF()
{
html2canvas(document.body).then(canvas => {
// Few necessary setting options

const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
var width = pdf.internal.pageSize.getWidth();
var height = canvas.height * width / canvas.width;
pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
pdf.save('output.pdf'); // Generated PDF
});
}

dados = {
  portaria: "Portaria 582 e Portaria 537 de 2015",
  processo: "220002",
  dtImpressao: "22/05/2022",
  Empresa: "MC",
  dtInicio: "25/05/2022",
  dtTermino: "30/05/2022",
  tipoAuditoria: "Auditoria de manutenção 1",
  objetivo: "teste",
  escopo: "os requisitos que serão auditados",
  liderEquipe: "Jhon",
  auditores: "Rock, Latrel",
  item: "1",
  atividade: "Análise  das qualificações",
  dtAtividade: "15/02/2022",
  auditoresAtividade: "Jhon",
  obs: "teste",
  representanteSpie: "Cris",
}

createPdf(){

  const doc = new jsPDF();
  doc.rect(1, 1, 208, 40, "S");
  doc.rect(1, 1, 30, 40, "S");
  doc.rect(31, 1, 148, 40, "S");

  doc.setFontSize(22)
  doc.setFont("times","", "bold")
  doc.text("Plano de Auditoria de Spie", 60, 10);
  doc.setFontSize(16);
  doc.setTextColor("red")
  doc.text("F-09", 85, 18);
  doc.setTextColor("black");
  doc.text("(Rascunho)", 105, 18);
  doc.setFont("","", "normal");
  doc.setFontSize(12);
  doc.text(this.dados.portaria, 60, 25);
  doc.text("processo:", 40, 35);
  doc.setTextColor("red")
  doc.text(this.dados.processo, 58, 35);
  doc.setTextColor("black");
  let concatdt = "Data de Impressão: "+ this.dados.dtImpressao;
  doc.text(concatdt, 110, 35);


  doc.setFillColor(156, 163, 175);
  doc.rect(1, 41, 100, 7, "FD");
  doc.rect(100, 41, 60, 7, "FD");
  doc.rect(160, 41, 49, 7, "FD");
  doc.rect(1, 48, 99, 7, "S");
  doc.rect(100, 48, 60, 7, "S");
  doc.rect(160, 48, 49, 7, "S");

  doc.setFont("times","", "bold");
  doc.text("Empresa:", 2, 46);
  doc.text("Data Inicio: ", 102, 46);
  doc.text("Data de Conclusão: ", 162, 46);

  doc.setFont("times","", "normal");
  doc.text(this.dados.Empresa, 2, 52);
  doc.text(this.dados.dtInicio, 102, 52);
  doc.text(this.dados.dtTermino, 162, 52);

  doc.setFillColor(156, 163, 175);
  doc.setFont("times","", "bold");
  doc.rect(1, 54, 208, 7, "FD");
  doc.text("Tipo de Auditoria: ", 2, 59);
  doc.rect(1, 61, 208, 7, "S");
  doc.setFont("times","", "normal");
  doc.text(this.dados.tipoAuditoria, 2, 66);

  doc.setFillColor(156, 163, 175);
  doc.rect(1, 68, 208, 7, "FD");
  doc.setFont("times","", "bold");
  doc.text("Objetivo:", 2, 73);
  doc.rect(1, 75, 208, 7, "S");
  doc.setFont("times","", "normal");
  doc.text(this.dados.objetivo, 2, 80);

  doc.setFillColor(156, 163, 175);
  doc.rect(1, 82, 208, 7, "FD");
  doc.setFont("times","", "bold");
  doc.text("Escopo:", 2, 87);
  doc.rect(1, 89, 208, 7, "S");
  doc.setFont("times","", "normal");
  doc.text(this.dados.escopo, 2, 94);

  doc.setFillColor(156, 163, 175);
  doc.rect(1, 96, 208, 7, "FD");
  doc.setFont("times","", "bold");
  doc.text("Equipe de Auditoria:", 2, 101);
  doc.rect(1, 103, 70, 7, "S");
  doc.rect(71, 103, 138, 7, "S");
  doc.setFont("times","", "normal");
  doc.text(this.dados.liderEquipe, 2, 108);
  doc.text(this.dados.auditores, 72, 108);

  doc.setFillColor(156, 163, 175);
  doc.rect(1, 110, 30, 7, "FD");
  doc.rect(31, 110, 60, 7, "FD");
  doc.rect(91, 110, 60, 7, "FD");
  doc.rect(151, 110, 58, 7, "FD");
  doc.setFont("times","", "bold");
  doc.text("Item:", 2, 115);
  doc.text("Atividade:", 32, 115);
  doc.text("Data:", 92, 115);
  doc.text("Auditores:", 152, 115);
  doc.rect(1, 117, 30, 7, "S");
  doc.rect(31, 117, 60, 7, "S");
  doc.rect(91, 117, 60, 7, "S");
  doc.rect(151, 117, 58, 7, "S");
  doc.setFont("times","", "normal");
  doc.text(this.dados.item, 2, 122);
  doc.text(this.dados.atividade, 32, 122);
  doc.text(this.dados.dtAtividade, 92, 122);
  doc.text(this.dados.auditoresAtividade, 152, 122);

  doc.setFillColor(156, 163, 175);
  doc.rect(1, 124, 208, 7, "FD");
  doc.setFont("times","", "bold");
  doc.text("Observações Relatáveis", 2, 129);
  doc.rect(1, 131, 208, 7, "S");
  doc.setFont("times","", "normal");
  doc.text(this.dados.obs, 2, 136);

  doc.setFillColor(156, 163, 175);
  doc.rect(1, 138, 104, 7, "FD");
  doc.rect(105, 138, 104, 7, "FD");
  doc.setFont("times","", "bold");
  doc.text("Auditor Lider:", 2, 143);
  doc.text("Assinatura:", 106, 143);
  doc.rect(1, 145, 104, 7, "S");
  doc.rect(105, 145, 104, 7, "S");
  doc.setFont("times","", "normal");
  doc.text(this.dados.liderEquipe, 2, 150);

  doc.setFillColor(156, 163, 175);
  doc.rect(1, 152, 104, 7, "FD");
  doc.rect(105, 152, 104, 7, "FD");
  doc.setFont("times","", "bold");
  doc.text("Representante Spie:", 2, 157);
  doc.text("Assinatura:", 106, 157);
  doc.rect(1, 159, 104, 7, "S");
  doc.rect(105, 159, 104, 7, "S");
  doc.setFont("times","", "normal");
  doc.text(this.dados.representanteSpie, 2, 164);

  doc.save("Plano de Auditoria de Spie.pdf");
}

// createPdf(){
//   const doc = new jsPDF();

//   doc.save("Relatório de Plano.pdf")
// }
ngOnInit(): void {
    const cep = this.httpClient.get(`https://brasilapi.com.br/api/cep/v1/38706336`);
    console.log(cep)
}
}
