import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-track-listing',
  templateUrl: './product-track-listing.component.html',
  styleUrls: ['./product-track-listing.component.css']
})
export class ProductTrackListingComponent implements OnInit {

  albumInfo: Album;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
