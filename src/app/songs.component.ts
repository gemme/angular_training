import { Component } from '@angular/core';

@Component({
    template: `
        <div>
            <h2>this is the list of my favourites songs </h2>
            <input type="text" name="song" [(ngModel)]="title">
            <button (click)="addSong()">Agregar una cancion</button>
            <ul>
                <li *ngFor="let song of songs">{{song}}</li>
            </ul>
        <div>`,
    selector: 'songs'
})
export class SongsComponent {

    public title:string = null;

    songs = [
        'Nobody knows when you are out and down',
        'Layla',
        'Drive'
    ];

    addSong() {
        console.log('add song');
        // mutating
        //this.songs.push(this.title);
        //using spread operator to avoid mutations
        this.songs = [...this.songs, this.title];
        this.title = null;
    }

}