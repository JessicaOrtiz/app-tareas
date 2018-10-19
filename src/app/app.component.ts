import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas: Tarea[]; //Arrelo de tareas
  ultimoId: number;
  tareasCompletadas: number;

  constructor(){
    this.tareas = [{id: 1, titulo: 'terminar el API', completada: false},{id: 2, titulo: 'Corregir historias de usuario', completada: true}, {id: 3, titulo: 'Comprar boletos para el cine', completada: false}];
    this.ultimoId = 3;
  }

  agreagarTarea(tituloTarea: string){
    const tareaNueva = new Tarea({titulo: tituloTarea});
    tareaNueva.id = ++this.ultimoId;
    this.tareas.push(tareaNueva);
  }

  eliminarTarea(idTarea: number){
    this.tareas  = this.tareas.filter(function(tarea){
      return tarea.id !== idTarea;
    });
  }

  actualizarTareasCompletadas(){
    this.tareasCompletadas = this.tareas.filter(function(tarea){
      return tarea.completada === true;
    }).length;
  }
}

class Tarea{
  id: number;
  titulo: string;
  completada: boolean;

  constructor(valores: Object = {}){
    Object.assign(this, valores);
  }
}

