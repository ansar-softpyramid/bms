import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import { Item } from '../modals/item';

@Injectable()
export /**
 * BmsApiService
 */
class BmsApiService {
    constructor(private http: Http) {}

    private resourceItems='http://localhost:8000/items';

    getItems(): Observable<Item[]>
    {
        return this.http.get(this.resourceItems)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    findItem(id:number): Observable<Item>
    {
        return this.http.get(this.resourceItems+'/'+id)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    saveItem(item:Item): Observable<Item>
    {
        return this.http.post(this.resourceItems, item)
                .map(this.extractData)
                .catch(this.handleError);
    }
    updateItem(item:Item): Observable<Item>
    {
        return this.http.put(this.resourceItems+'/'+item.id, item)
                .map(this.extractData)
                .catch(this.handleError);
    }
    deleteItem(item:Item):Observable<Item[]>
    {
        return this.http.delete(this.resourceItems+'/'+item.id)
                .map(this.extractData)
                .catch(this.handleError);
    }
    
    //----------------- Helper Methods ----------------------------------------------
    private extractData(res: Response) {
        let data = res.json();
        return data || { };
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}