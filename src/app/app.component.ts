import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
// import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Observable } from 'rxjs';
import { take, startWith, map } from 'rxjs/operators';
// import { CustomValidatorsService } from './custom-validators.service';

export interface JsonFormat {
  name: string;
  id: string;
}

export interface JSONObject {
  key: string;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  formGroup: FormGroup;
  post: any = '';
  error: JSONObject[] = [
    { key: 'fileName', value: 'Enter File Name. For eg., "MYGENERATEDFILE01"' },
    { key: 'destination', value: 'Enter Destination, you can provide your desktop location' },
    { key: 'noOfCols', value: 'Enter Number of Columns' },
    { key: 'noOfRows', value: 'Enter Number of Rows' },
    { key: 'colDecimeter', value: 'Enter Column Decimeter' },
    { key: 'attributeName', value: 'Enter Attribute Name' },
    { key: 'dataName', value: 'Enter Data Name' },
    { key: 'dataPattern', value: 'Enter Data Pattern' },
    { key: 'startingFrom', value: 'Starting From' },
    { key: 'endingTo', value: 'Ending To' },
    { key: 'startingLength', value: 'Starting Length' },
    { key: 'endingLength', value: 'Ending Length' },
    { key: 'fixedLength', value: 'Fixed Length' },
    { key: 'charactersFor', value: 'Characters For' }
  ];

  hint: JSONObject[] = [
    { key: 'fileName', value: 'Enter any file name. For eg., "MYGENERATEDFILE01"' },
    { key: 'destination', value: 'Provide your desktop location' },
    { key: 'noOfCols', value: 'Enter valid number' },
    { key: 'noOfRows', value: 'Enter valid number' },
    { key: 'colDecimeter', value: 'For eg. Comma (,) can be entered' }
  ];
  projectNameList: JsonFormat[] = [
    { name: 'System of Insights', id: 'soi' },
    { name: 'Project1', id: 'project1' },
    { name: 'Project2', id: 'project2' }
  ];
  dataRequestList: JsonFormat[] = [
    { name: 'Network Billing', id: 'billing' },
    { name: 'Network Support', id: 'support' }
  ];
  requestTypesList: JsonFormat[] = [
    { name: 'New data set', id: 'newData' },
    { name: 'Existing data backup', id: 'existingData' },
    { name: 'Data with masking', id: 'maskData' },
    { name: 'Data with encrypted', id: 'encryptedData' }
  ];
  dataFormatList: JsonFormat[] = [
    { name: 'Flat file', id: 'flat' },
    { name: 'XML', id: 'xml' },
    { name: 'JSON', id: 'json' },
    { name: 'Database', id: 'database' }
  ];
  title = 'data-generation-tool';

  // constructor() {
  //  }

  ngOnInit() {
    this.createForm();
    this.setChangeValidate();
  }

  createForm() {
    this.formGroup = new FormGroup({
      fileName: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required]),
      noOfCols: new FormControl('', [Validators.required]),
      noOfRows: new FormControl('', [Validators.required]),
      colDecimeter: new FormControl('', [Validators.required]),
      attributeName: new FormControl('', [Validators.required]),
      dataName: new FormControl('', [Validators.required]),
      dataPattern: new FormControl('', [Validators.required]),
      startingFrom: new FormControl('', [Validators.required]),
      endingTo: new FormControl('', [Validators.required]),
      startingLength: new FormControl('', [Validators.required]),
      endingLength: new FormControl('', [Validators.required]),
      fixedLength: new FormControl('', [Validators.required]),
      charactersFor: new FormControl('', [Validators.required])
    });
  }

  // private _filter(value: string): JsonFormat[] {
  //   if (value) {
  //     const filterValue = value.toLowerCase();
  //     return this.projectNameList.filter(proj => proj.name.toLowerCase().indexOf(filterValue) === 0);
  //   }
  // }

  setChangeValidate() {
  }

  returnMessage(param: string, infoMode: boolean) {
    if (infoMode === false) {
      for (const e of this.error) {
        if (e.key === param) {
          return e.value;
        }
      }
    } else {
      for (const e of this.hint) {
        if (e.key === param) {
          return e.value;
        }
      }
    }
  }

  validateErrorMessage(param: string) {
    return this.formGroup.get(param).hasError('required') ? this.returnMessage(param, false) : '';
  }

  getHintMessage(param: string) {
    return this.returnMessage(param, true);
  }

  validateFileName() {
    return this.validateErrorMessage('fileName');
  }

  validateDestination() {
    return this.validateErrorMessage('destination');
  }

  validateNoOfCols() {
    return this.validateErrorMessage('noOfCols');
  }

  validateNoOfRows() {
    return this.validateErrorMessage('noOfRows');
  }

  validateDecimeter() {
    return this.validateErrorMessage('colDecimeter');
  }

  validateAttributeName() {
    return this.validateErrorMessage('attributeName');
  }

  validateDataName() {
    return this.validateErrorMessage('dataName');
  }

  validateDataPattern() {
    return this.validateErrorMessage('dataPattern');
  }

  validateStartingFrom() {
    return this.validateErrorMessage('startingFrom');
  }

  getFileNameHint() {
    return this.getHintMessage('fileName');
  }

  getDestinationHint() {
    return this.getHintMessage('destination');
  }

  getNoOfColsHint() {
    return this.getHintMessage('noOfCols');
  }

  getNoOfRowsHint() {
    return this.getHintMessage('noOfRows');
  }

  getColDecimeterHint() {
    return this.getHintMessage('colDecimeter');
  }

  // triggerResize() {
  //   // Wait for changes to be applied, then trigger textarea resize.
  //   this._ngZone.onStable.pipe(take(1))
  //     .subscribe(() => this.autosize.resizeToFitContent(true));
  // }

  onSubmit(post: any) {
    this.post = post;
  }

}
