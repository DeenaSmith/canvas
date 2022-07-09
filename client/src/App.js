import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ArtistSignup from './pages/ArtistSignup';
import Home from './pages/Home';
import { ApolloClient, ApolloProvider, InMemoryCache, gql  } from '@apollo/client';


function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });

  return (
  
      <Router>
        <ApolloProvider client={client}>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<ArtistSignup />} />
            </Routes>

          </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;