import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    time = new Date();
    obj = {
        foo: 'bar', baz: 'qux',
        nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}
    };
    str = 'Hello World';
    str2 = 'oh, that\'s just for fun';
    money = 17.3982;
    num = 1234.56789;
    decimal = 0.12345678;
    arr = [1, 2, 3, 4, 5, 6];
}
