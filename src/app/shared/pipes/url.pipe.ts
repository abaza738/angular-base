import { Pipe, PipeTransform } from "@angular/core";
import { environment } from "src/environments/environment";

@Pipe({
    name: 'url'
})
export class UrlPipe implements PipeTransform {
    transform(url: string) {
        return new URL(url, environment.apiUrl).href;
    }
}