import { NoteFilter } from './note-filter.jsx';
import { NotePreview } from './note-preview.jsx';

export class NoteList extends React.Component {
  render() {
    return (
      <section className="note-list">
        <NoteFilter />

        <div className="notes-cards-container">
          <NotePreview />
          <NotePreview />
          <NotePreview />
          <NotePreview />
          <NotePreview />
          <NotePreview />
          <NotePreview />
        </div>
      </section>
    );
  }
}
