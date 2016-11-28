import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    // public forecasts: WeatherForecast[];
    public jokes = {};

    constructor(http: Http) {
        // http.get('/api/SampleData/WeatherForecasts').subscribe(result => {
        //     // this.forecasts = result.json();
        //     console.log(result);
        // });
        http.get('http://api.icndb.com/jokes/random').subscribe(res => {
                // this.jokes = result.json();
                console.log(res["_body"]);
                // console.log(result);
        })
    }
}
interface joke{
    value: string;
}
// interface WeatherForecast {
//     // dateFormatted: string;
//     // temperatureC: number;
//     // temperatureF: number;
//     // summary: string;
// }
