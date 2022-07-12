import React, { useState } from 'react';
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
import Profile from './pages/Profile';


function App() {
  const [ categories ] = useState([
    {
      name:"American Traditional"
    },
    {
      name:"Color"
    },
    {
      name:"Black & Grey"
    },
    {
      name:"Japanese"
    },
    {
      name:"Realism"
    }

  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0])

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });

  return (
    
      <Router>
        <ApolloProvider client={client}>
          <div>
            <Header
              categories={categories}
              setCurrentCategory={setCurrentCategory}
              currentCategory={currentCategory}
              >
            </Header>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<ArtistSignup />} />
              <Route path='/gallery' element={<Gallery currentCategory={currentCategory}></Gallery>} />
            </Routes>
          </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;