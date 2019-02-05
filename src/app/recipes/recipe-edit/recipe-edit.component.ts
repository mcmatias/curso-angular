import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NumberValueAccessor } from '@angular/forms/src/directives';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;  //params['id'] vai ser null caso a url seja new, logo nao estamos em editMode e o retorno vai ser false
      }
    )
  }

}
