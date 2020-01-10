import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Observable } from 'rxjs';
import { take, startWith, map } from 'rxjs/operators';

export interface JsonFormat {
  name: string;
  id: string;
}

@Component({
  selector: 'app-form-auto-complete-field',
  templateUrl: './form-auto-complete-field.component.html',
  styleUrls: ['./form-auto-complete-field.component.scss']
})
export class FormAutoCompleteFieldComponent implements OnInit {

  formGroupProject: FormGroup;
  // post: any = '';
  projectNameList: JsonFormat[] = [
    { name: 'System of Insights', id: 'soi' },
    { name: 'Project1', id: 'project1' },
    { name: 'Project2', id: 'project2' }
  ];

  filteredProjectNameList: Observable<JsonFormat[]>;

  constructor(
  ) { }

  ngOnInit() {

    this.createAutoCompleteForm();

    // this.filteredProjectNameList = this.formGroupProject.get('projectNameControl')!.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(name => name ? this._filter(name) : this.projectNameList.slice())
    //   );
  }

  createAutoCompleteForm() {
    this.formGroupProject = new FormGroup({
      projectNameControl: new FormControl('', [Validators.required])
    });
  }

  private _filter(value: string): JsonFormat[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.projectNameList.filter(proj => proj.name.toLowerCase().indexOf(filterValue) === 0);
    }
  }
}
