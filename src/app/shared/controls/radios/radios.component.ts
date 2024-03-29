import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { ControlItem, Value } from '@app/models/frontend';
export { ControlItem, Value } from '@app/models/frontend';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
  providers: [
    {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef( () => RadiosComponent),
    multi: true
  }
]
})
export class RadiosComponent implements OnInit, ControlValueAccessor {

  value!: Value;
  isDisabled!: boolean;


   @Input() items!: ControlItem[];
   @Output() changed = new EventEmitter<Value>();

  constructor() { }

  ngOnInit(): void {
  }

  private propagateChange: any = () => {};

  writeValue(value: Value): void{
    this.value = value;
  }

  registerOnChange(fn: any): void{
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void{
    //this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void{
    this.isDisabled = isDisabled;
  }

  onChanged(value: Value): void{
    this.value = value;
    this.propagateChange(value);
    this.changed.emit(value);
  }

  isChecked(value: Value): boolean {
    return this.value === value;
  }

  // private getSelected(value: Value, checked: boolean): Value[]{
  //   const selected: Value[] = this.value ? [...this.value] : [];
  //   if(checked){
  //     if(!selected.includes(value)){
  //       selected.push(value);
  //     }
  //   }else{
  //     const index = selected.indexOf(value);
  //     selected.splice(index, 1);
  //   }
  //   return selected.length ? selected : [];
  // }


}
