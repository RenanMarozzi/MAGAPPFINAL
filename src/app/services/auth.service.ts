import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;
  calendarItems: any[];

  constructor(public afAuth: AngularFireAuth) {
    this.initClient();
    this.user$ = afAuth.authState;
  }

  // Initialize the Google API client with desired scopes
  initClient() {
    gapi.load('client', () => {
      console.log('loaded client');

      // It's OK to expose these credentials, they are client safe.
      gapi.client.init({
        apiKey: 'AIzaSyAc9Tt8pQQF3ntu2Tz66iUKl_fXHtdhIyc',
        clientId: '581326886241-3pthiumf8t14p95siesg028gf9rde5pf.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar.readonly'
      });

      gapi.client.load('calendar', 'v3', () => console.log('loaded calendar'));

    });


  }
    async insertEvent() {
    const insert = await gapi.client.calendar.events.insert({
      calendarId: 'primary',
      start: {
        dateTime: hoursFromNow(2),
        timeZone: 'America/Los_Angeles'
      },
      end: {
        dateTime: hoursFromNow(3),
        timeZone: 'America/Los_Angeles'
      },
      summary: 'Have Fun!!!',
      description: 'Do some cool stuff and have a fun time doing it'
    });

    await this.getCalendar();
  }
  getCalendar() {
    throw new Error('Method not implemented.');
  }


}

const hoursFromNow = (n) => new Date(Date.now() + n * 1000 * 60 * 60 ).toISOString();
