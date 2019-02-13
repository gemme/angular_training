import { Component } from '@angular/core';

@Component({
    template: `
        <div>
            <h2>this is the list of my favourites songs </h2>
            <ul>
                <li *ngFor="let song of songs">{{song}}</li>
            </ul>
        <div>`,
    selector: 'songs'
})
export class SongsComponent {
    songs = [
        'Nobody knows when you are out and down',
        'Layla',
        'Drive'
    ];
}