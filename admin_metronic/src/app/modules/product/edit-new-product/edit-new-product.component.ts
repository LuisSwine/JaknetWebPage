import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Toaster } from 'ngx-toast-notifications';
import { CategoriesService } from '../../categories/_services/categories.service';
import { ProductService } from '../_services/product.service';
import { NoticyAlertComponent } from 'src/app/componets/notifications/noticy-alert/noticy-alert.component';

@Component({
  selector: 'app-edit-new-product',
  templateUrl: './edit-new-product.component.html',
  styleUrls: ['./edit-new-product.component.scss']
})
export class EditNewProductComponent implements OnInit {

  product_id:any = null;
  product_selected:any = null;

  title:any = null;
  sku:any = null;
  categories:any = [];
  categorie:any = "";
  price_pesos:any = 0;  
  price_usd:any = 0;  
  imagen_file:any= null;
  imagen_previzualizacion:any = null;
  resumen:any = null;
  description:any = null;
  // 
  tag:any = null;
  tags:any = [];

  isLoading$:any;
  type_inventario:any = 1;
  stock:any = 0;

  stock_multiple:any = 0;
  valor_multiple:any = "";

  variedades:any = [];

  imagen_previz_galeria:any = null;
  imagen_file_galeria:any = null;
  galerias:any = [];
  constructor(
    public _productService:ProductService,
    public router:Router,
    public _categorieService:CategoriesService,
    public activeRouter:ActivatedRoute,
    public toaster: Toaster,
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.isLoading$ = this._productService.isLoading$;
    this.activeRouter.params.subscribe((resp:any) => {
      console.log(resp);
      this.product_id = resp.id;
    });

    this._productService.showProduct(this.product_id).subscribe((resp:any) => {
      console.log(resp);
      this.product_selected = resp.product;

      this.title = this.product_selected.title;
      this.sku = this.product_selected.sku;
      this.categorie = this.product_selected.categorie._id;
      this.price_pesos = this.product_selected.price_pesos;
      this.price_usd = this.product_selected.price_usd;

      

      this.stock = this.product_selected.stock;

      this.imagen_previzualizacion = this.product_selected.imagen;
      this.resumen = this.product_selected.resumen;
      this.description = this.product_selected.description;
      this.tags = this.product_selected.tags;
      this.variedades = this.product_selected.variedades;
      this.type_inventario = this.product_selected.type_inventario;

      this.galerias = this.product_selected.galerias;
    })

    this._categorieService.allCategories().subscribe((resp:any) => {
      console.log(resp);
      this.categories = resp.categories;
      this.loadServices();
    })
  }

  loadServices(){
    this._productService.isLoadingSubject.next(true);
    setTimeout(() => {
      this._productService.isLoadingSubject.next(false);
    }, 50);
  }

  processFile($event){
    if($event.target.files[0].type.indexOf("image") < 0){
      this.imagen_previzualizacion = null;
      this.toaster.open(NoticyAlertComponent,{text:`danger-'Upps! Necesita ingresar un archivo de tipo imagen.'`});
      return;
    }
    this.imagen_file = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.imagen_file);
    reader.onloadend = () => this.imagen_previzualizacion = reader.result;
    this.loadServices();
  }

}
