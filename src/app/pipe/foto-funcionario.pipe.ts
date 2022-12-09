import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fotoFuncionario'
})
export class FotoFuncionarioPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (value == undefined || value == null || value == "") {
      return "https://www.vaan-arbeidsrecht.nl/assets/_admin/avatar-d33956c963c185b00922fb949c824d14e9e629a5e95ece651d06cf307f6fc3d0.png"
    }
    return value;
  }
}