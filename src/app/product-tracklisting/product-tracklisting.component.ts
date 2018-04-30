import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-tracklisting',
  template: `
  <div class="row tracklisting">
  <ul>
    <li>
      <div class="col-sm-5">
        <span class="track-number">1</span>
        <span class="track-name">The Last</span>
      </div>
      <div class="col-sm-3 text-right">
        <span class="track-time">4:48</span>
        <span class="price-and-buy"><button>$0.99</button></span>
      </div>
    </li>
  </ul>
</div>
`,
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTrackListingComponent implements OnInit {

  albumInfo: Album;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
