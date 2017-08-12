
import { PipeTransform, Pipe } from "@angular/core";
import * as moment from 'moment';

@Pipe({
    name: 'time'
})
export class Time implements PipeTransform {

    transform(date: string): string {
        return moment(date).fromNow();
    }
}