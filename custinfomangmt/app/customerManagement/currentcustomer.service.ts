    import {Injectable} from 'angular2/core'
    import {Subject}    from 'rxjs/Subject';
    @Injectable()
    export class CurrentCustomerService {
      // Observable string sources
      private _currentcustomerfirstName = new Subject<string>();
        
      
      // Observable string streams
      firstName$ = this._currentcustomerfirstName.asObservable();
      
      // Service message commands
      announcefirstName(mission: string) {
          
        this._currentcustomerfirstName=mission;
      
      console.log("CAME HERE=",mission);
      }

        
            }