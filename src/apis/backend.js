import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { delay } from 'rxjs/operators';

export const getProfile = ({ userName }) => ajax.getJSON(`https://api.github.com/users/${userName}`);

export const getVideoList = ({ page, limit }) => {
    return of({
        data: [{id: 1, name: 'video1'}, {id: 2, name: 'video2'}],
        total: 50,
    }).pipe(delay(1500));
  };
