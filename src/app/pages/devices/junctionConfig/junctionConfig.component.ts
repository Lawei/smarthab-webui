import { Component, OnInit } from '@angular/core';
import { RestDataService } from '../../../restdata.service';

@Component({
  selector: 'junction-config',
  providers: [RestDataService],
  templateUrl: './junctionConfig.html'
})
export class JunctionConfigComponent implements OnInit {

  constructor(private _dataService: RestDataService) {}
 
  ngOnInit() {
  }

  private getJunctions(): void {
      /*
      this._dataService
          .GetDeviceJunctions()
          .subscribe((data:Device[]) => this.devicesTableData = data,
              error => console.log(error),
              () => console.log('Get all Devices complete'));
              */
  }

}