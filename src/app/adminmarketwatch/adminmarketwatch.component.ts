import { Component,OnInit  } from '@angular/core';
declare var window: any;


@Component({
  selector: 'app-adminmarketwatch',
  templateUrl: './adminmarketwatch.component.html',
  styleUrl: './adminmarketwatch.component.css'
})



export class AdminmarketwatchComponent implements OnInit {


  formModal35:any;
  symbols = [
    { name: 'NIFTY26SEP24F', shortName: 'NIFTY' },
    { name: 'AARTIIND26SEP24F', shortName: 'AARTIIND' },
    { name: 'ABB26SEP24F', shortName: 'ABB' },
    { name: 'ABBOTINDIA26SEP24F', shortName: 'ABBOTINDIA' },
    { name: 'NIFTYNXT5027SEP24F', shortName: 'NIFTYNXT50' },
    { name: 'BANKNIFTY30OCT24F', shortName: 'BANKNIFTY' }
  ];
  filteredSymbols: any[] = [];
  selectedSymbol: string = '';


  ngOnInit(): void {



    this.formModal35 = new window.bootstrap.Modal(
      document.getElementById("exampleModal35")
    );

    
}


openmodal(){    
  this.formModal35.show();
  
}
closeModal(): void {
  this.formModal35.hide(); 
}
onSearch(event: any): void {
  const searchTerm = event.target.value.toLowerCase();
  if (searchTerm) {
    this.filteredSymbols = this.symbols.filter(symbol =>
      symbol.name.toLowerCase().includes(searchTerm)
    );
  } else {
    this.filteredSymbols = [];
  }
}

// Select a symbol from the dropdown
selectSymbol(symbol: any): void {
  this.selectedSymbol = symbol.name;
  this.filteredSymbols = [];
}
}

