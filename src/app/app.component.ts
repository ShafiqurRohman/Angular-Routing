import { Component } from '@angular/core';
import { ScrollService } from 'src/services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Routing-Test';

  constructor(private scrallService: ScrollService){

  }
}
