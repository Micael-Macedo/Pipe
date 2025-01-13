import { Pipe, PipeTransform } from '@angular/core';
import { ArrayTransformPipe } from './array-transform.pipe';

@Pipe({
  name: 'inpureFilter',
  pure: false
})
export class InpurePipePipe extends ArrayTransformPipe {

}
