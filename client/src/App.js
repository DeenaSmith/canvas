import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ArtistSignup from './pages/ArtistSignup';
import Login from './pages/Login';
import Home from './pages/Home';
import Upload from './pages/uploadPhoto';
import { ApolloClient, ApolloProvider, InMemoryCache, gql  } from '@apollo/client';
import Landing from './pages/Landing';


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
<<<<<<< HEAD
              <Route path='/' element={<Landing />} />
              <Route path="/home" element={<Home />} />
=======
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
>>>>>>> b01d80b33c2165dc4844171777533fdc41df806d
              <Route path="/signup" element={<ArtistSignup />} />
            </Routes>
            <Upload />
          </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;