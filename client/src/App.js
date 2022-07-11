import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Header from './components/Header';
import ArtistSignup from './pages/ArtistSignup';
import Login from './pages/Login';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Gallery from './pages/Gallery';


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
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<ArtistSignup />} />
              <Route path='/gallery' element={<Gallery />} />
            </Routes>
          </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;