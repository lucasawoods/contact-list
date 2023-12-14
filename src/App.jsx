import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

/*
Need to know IF a contact was clicked
  -create a state variable to track what was clicked

if a contact was clicked, then show detail, otherwise show ContactList
*/


function App() {

  const [selectedContactID, setSelectedContactId] = useState(null);

//condition ? *true case* : *false case* ;

  return ( 
  <>
  {selectedContactID ? (
    <SelectedContact selectedContactID={selectedContactID} />
  ) : (
  <ContactList setSelectedContactId={setSelectedContactId} />
  )}
  </>
  );
}
export default App;
