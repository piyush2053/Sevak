import { Component } from '@angular/core';
import { ApiserviceService } from './api-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sevak';
  details = new FormGroup({
    'number': new FormControl('', Validators.required),
  })
  constructor(private api: ApiserviceService) { }
  submit(){
    console.log(this.details.value)
    this.api.vehicleInfo(this.details.value).subscribe((res) => {
      console.log(res);
    })
  }
  
}

