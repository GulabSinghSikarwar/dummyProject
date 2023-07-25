import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-error-warning',
  templateUrl: './error-warning.component.html',
  styleUrls: ['./error-warning.component.scss']
})
export class ErrorWarningComponent {
@Input() errorMessage?:string;

}
