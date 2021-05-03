import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

heroes: string[] = ['Bruja Escarlata','Spiderman','Ironman','Hulk','Thor'];
borrado: string ='';

borrarHeroe():void{
  this.borrado = this.heroes.shift() || '';
}

}
