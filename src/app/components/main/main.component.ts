import { Component, HostBinding } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {

  @HostBinding('class') mainClass = 'main';

}
