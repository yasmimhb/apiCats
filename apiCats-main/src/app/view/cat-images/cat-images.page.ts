import { Component } from '@angular/core';
import { CatapiService } from 'src/app/services/catapi.service';

@Component({
  selector: 'app-cat-images',
  templateUrl: './cat-images.page.html',
  styleUrls: ['./cat-images.page.scss'],
})
export class CatImagesPage {
  cats: any[] = [];
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.5, // Altere o valor para exibir mais ou menos imagens lado a lado
    centeredSlides: true,
    speed: 400
  };
  
  constructor(private catApiService: CatapiService) { }

  getRandomCat() {
    this.catApiService.getRandomCat().subscribe(
      (data: any) => {
        // A API retorna um único objeto, então convertemos para um array para manter a consistência
        this.cats = [data];
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getTenRandomCats() {
    this.catApiService.getTenRandomCats().subscribe(
      (data: any[]) => {
        this.cats = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getTenBengalCats() {
    this.catApiService.getTenBengalCats().subscribe(
      (data: any[]) => {
        this.cats = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
