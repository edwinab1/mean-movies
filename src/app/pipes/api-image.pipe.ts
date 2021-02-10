import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'apiimage'
})
export class ApiImagePipe implements PipeTransform {

  transform(image: String): String {
    if (image) {
      return environment.API_URL + '/images/' + image;
    }
  }

}
