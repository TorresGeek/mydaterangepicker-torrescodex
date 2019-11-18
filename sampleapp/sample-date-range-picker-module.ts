import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MyDateRangePickerApp}  from './sample-date-range-picker-app';

import {SampleDateRangePickerNormal} from './sample-date-range-picker-normal/index';

import {MyDateRangePickerModule} from '../src/my-date-range-picker/my-date-range-picker.module';

@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule, FormsModule, MyDateRangePickerModule ],
    declarations: [ MyDateRangePickerApp, SampleDateRangePickerNormal],
    bootstrap:    [ MyDateRangePickerApp ]
})
export class SampleDateRangePickerModule { }