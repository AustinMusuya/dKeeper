import { useState, useEffect } from "react";
import { dKeeper_backend } from "declarations/dKeeper_backend";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      dKeeper_backend.createNote(newNote.title, newNote.content);
      return [newNote, ...prevNotes];
    });
  }
  useEffect(() => {
    console.log("I'm walking here!");
    fetchData();
  }, []);

  const fetchData = async () => {
    const notesArray = await dKeeper_backend.readNotes();
    setNotes(notesArray);
  };

  function deleteNote(id) {
    dKeeper_backend.removeNote(id);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
