import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Note } from '../note.model';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    newStickyNote = new Note('', '', '', '', '', '');
    reasonsForNote = [
        'Just saying hi!',
        'I have a project for you.',
        'I\'d like to talk to you'
    ];
    @Output() showNewNoteModal = new EventEmitter<boolean>();
    @Output() addThisStickyNote = new EventEmitter<Note>();

    constructor() { }

    ngOnInit() {
    }

    closeThisModal() {
        this.showNewNoteModal.emit(false);
    }

    submitNewStickyNote() {
        console.log(this.newStickyNote);
        this.addThisStickyNote.emit(this.newStickyNote);
    }

    get showStickyNoteDetails() {
        return JSON.stringify(this.newStickyNote);
    }
}
