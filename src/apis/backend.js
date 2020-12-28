import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { delay } from 'rxjs/operators';

export const getProfile = ({ userName }) => ajax.getJSON(`https://api.github.com/users/${userName}`);

export const getVideoList = ({ page, limit }) => {
    return of({
        total: 50,
        data: [{id: 1, name: 'video1'}, {id: 2, name: 'video2'}],
        currentPage: page,
        limitPerPage: limit
    }).pipe(delay(1500));
  };
