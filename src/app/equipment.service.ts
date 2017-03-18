import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class EquipmentService {
    constructor (private http: Http) {}

    // TODO: return promise
    getEquipmentList() {
        return this.http.get( '/api/equipment/get' )
            .map( res => res.json() );
    }

    createEquipment( newEquip ): Observable<Object> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers: headers });

        return this.http.post( '/api/equipment/create', newEquip, options )
            .map((res) => res.json())
            .catch((err) => Observable.throw(err.json().error) || "Server Error")
    }

    updateEquip( equip ): Observable<Object> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers: headers });

        return this.http.post( '/api/equipment/update', equip, options )
            .map((res) => res.json())
            .catch((err) => Observable.throw(err.json().error) || "Server Error")
    }

    deleteEquipment( equip ): Observable<Object> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers: headers });

        return this.http.post( '/api/equipment/delete', equip, options )
            .map((res) => res.json())
            .catch((err) => Observable.throw(err.json().error) || "Server Error")
    }
}