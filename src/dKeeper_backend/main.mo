import Debug "mo:base/Debug";
import List "mo:base/List";
actor {
  // create a note object
  public type Note = {
    title : Text;
    content : Text;
  };

  stable var notes : List.List<Note> = List.nil<Note>();

  // create a function to add/create a new note

  public func createNote(titleText:Text , contentText:Text){
    
    let newNote: Note = {
      title = titleText;
      content = contentText;
    };

    notes := List.push(newNote, notes);
    Debug.print(debug_show (notes));
  };

  // create a function that reads all created notes

  public query func readNotes(): async [Note]{
    return List.toArray(notes);
  };

  // method to remove a note

  public func removeNote(id: Nat){
    let listFront = List.take(notes, id);
    let listBack = List.drop(notes, id + 1);

    notes:= List.append(listFront, listBack);
  }

};
