import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Player } from './player.model';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PlayersService {
  private players: Player[];
  constructor(private http: Http) {}

  private baseUrl = 'http://api.dkjha.com/players/v1/api/';
  // private baseUrl = 'http://localhost:5000/players/v1/api/';

  getPlayersData(): Observable<Player[]> {
    return this.http
      .get(this.baseUrl + 'get')
      .map((response: Response) => {
        const data = response.json();
        return data.players;
      })
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error')
      );
  }

  // Get the details of Single Player
  getPlayerData(id): Observable<Player[]> {
    return this.http
      .get(this.baseUrl + 'get/' + id)
      .map((response: Response) => {
        const data = response.json();
        return data.player;
      })
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error')
      );
  }

  addPlayerData(player: Object): Observable<Player[]> {
    const body = JSON.stringify(player);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(this.baseUrl + 'new', body, options)
      .map((response: Response) => response.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error')
      );
  }

  updatePlayerData(player: Object): Observable<Player[]> {
    console.log(player);
    const body = JSON.stringify(player);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    console.log(body);
    return this.http
      .post(this.baseUrl + 'update', body, options)
      .map((response: Response) => response.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error')
      );
  }
  deletePlayer(id) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http
      .get(this.baseUrl + 'delete/' + id, options)
      .map((response: Response) => response.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error')
      );
  }
}
