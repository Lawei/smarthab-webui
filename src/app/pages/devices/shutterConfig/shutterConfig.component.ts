import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RestDataService } from '../restdata.service';
import { ShutterDevice, ShutterDeviceChannel } from '../ShutterDevice';

@Component({
  selector: 'shutter-config',
  providers: [RestDataService],
  template: require('./shutterConfig.html')
})
export class ShutterConfigComponent implements OnInit, OnDestroy {
  deviceConfig:ShutterDevice;

  public deviceId;
  private sub:any;

  public submitted:boolean = false;

  constructor(private _dataService: RestDataService, private route: ActivatedRoute) {
    this.deviceConfig = new ShutterDevice();
    console.log(this.deviceConfig);
  }
 
  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {

          this.deviceId = params['id'];
      });
      //this.getDeviceConfig();
  }

  ngOnDestroy() {
    // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }

  private getDeviceConfig(): void {
      this._dataService
          .GetShutterDeviceConfig(this.deviceId)
          .subscribe((data:ShutterDevice) => this.deviceConfig = data,
              error => console.log(error),
              () => console.log('Get ShutterDevice config complete'));
  }

  public onSubmit():void {
    this.submitted = true;
    //if (this.form.valid) {
      // your code goes here
      console.log(this.deviceConfig);
    //}
  }

  
}