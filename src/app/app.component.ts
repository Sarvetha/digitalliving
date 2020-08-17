import { Component } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dl-angular-client';

  constructor(private titleService: Title, private meta: Meta){
    titleService.setTitle('Digital Living');

    meta.addTag({name: 'viewport', content: 'width=device-width, initial-scale=1 shrink-to-fit=no'}, true);
    meta.addTag({name: 'description', content: 'Home Automation System'}, true);
    meta.addTag({name: 'author', content: 'Chethana'}, true);
  }
}
