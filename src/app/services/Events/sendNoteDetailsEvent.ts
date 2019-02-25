import { NoteDetailsResult } from '../results/noteDetailsResult';
import { GlobalEvent } from './globalEvent';

export class SendNoteDetailsEvent extends GlobalEvent {
    public send(noteId: string, noteTitle: string, notebookName: string, noteIsMarked: boolean) {
        this.globalEmitter.emit(`${this.eventId}-${noteId}`, new NoteDetailsResult(noteTitle, notebookName, noteIsMarked));
    }

    public receive(noteId: string, callback: any) {
        this.globalEmitter.on(`${this.eventId}-${noteId}`, (noteDetailsResult) => callback(noteDetailsResult));
    }
}