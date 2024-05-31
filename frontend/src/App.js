import React from 'react';
import './App.css';
import { db, auth } from './firebase';

function App() {
  // Example of accessing Firebase Firestore
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection('incidents').get();
      console.log(data.docs.map(doc => doc.data()));
    };
    fetchData();
  }, []);

  // Example of accessing Firebase Authentication
  React.useEffect(() => {
    const checkAuth = () => {
      auth.onAuthStateChanged(user => {
        if (user) {
          console.log('User is logged in:', user.uid);
        } else {
          console.log('User is logged out');
        }
      });
    };
    checkAuth();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Neighborhood Safety App</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

