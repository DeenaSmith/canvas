import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ArtistSignup from './pages/ArtistSignup';


function App() {

  return (
    <ApolloProvider client={true}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/signup" element={<ArtistSignup />} />
          </Routes>

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
