import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  contact: any = {};
  images = [             
    { url: 'https://via.placeholder.com/600x300?text=Imagen+1', alt: 'Imagen 1' },
    { url: 'https://via.placeholder.com/600x300?text=Imagen+2', alt: 'Imagen 2' },
    { url: 'https://via.placeholder.com/600x300?text=Imagen+3', alt: 'Imagen 3' }
  ];

  producto = [
    {
      nombre: 'Nombre articulo',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque pariatur quam, tenetur sapiente ipsum'
    },
    {
      nombre: 'Nombre articulo',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque pariatur quam, tenetur sapiente ipsum'
    },
    {
      nombre: 'Nombre articulo',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque pariatur quam, tenetur sapiente ipsum'
    },
    {
      nombre: 'Nombre articulo',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque pariatur quam, tenetur sapiente ipsum'
    },
    {
      nombre: 'Nombre articulo',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque pariatur quam, tenetur sapiente ipsum'
    },
    {
      nombre: 'Nombre articulo',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque pariatur quam, tenetur sapiente ipsum'
    },
    {
      nombre: 'Nombre articulo',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque pariatur quam, tenetur sapiente ipsum'
    },
    {
      nombre: 'Nombre articulo',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque pariatur quam, tenetur sapiente ipsum'
    },
    {
      nombre: 'Nombre articulo',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque pariatur quam, tenetur sapiente ipsum'
    },
    {
      nombre: 'Nombre articulo',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque pariatur quam, tenetur sapiente ipsum'
    },
    {
      nombre: 'Nombre articulo',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque pariatur quam, tenetur sapiente ipsum'
    },
    {
      nombre: 'Nombre articulo',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque pariatur quam, tenetur sapiente ipsum'
    },
    {
      nombre: 'Nombre articulo',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque pariatur quam, tenetur sapiente ipsum'
    },
    {
      nombre: 'Nombre articulo',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque pariatur quam, tenetur sapiente ipsum'
    },
    {
      nombre: 'Nombre articulo',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cumque pariatur quam, tenetur sapiente ipsum'
    },
  ]

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/json/info.json').subscribe((data: any) => {
      this.contact = data.contact;
    });
  }
}
