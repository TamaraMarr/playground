import {
    Observable
} from 'rxjs';

const observable = new Observable(observer => {
    const interval = setInterval(() => {
        observer.next('Hello');
    }, 1000);

    return () => {
        clearInterval(interval);
    }
});

observable.subscribe(value => console.log(value));