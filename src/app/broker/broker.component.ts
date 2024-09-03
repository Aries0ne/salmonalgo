import { Component } from '@angular/core';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrl: './broker.component.css'
})
export class BrokerComponent {
  onImageClick(imageName: string): void {
    console.log(`${imageName} image clicked`);
    // You can add your logic here, for example, navigate to another page or show a modal
  }

}
