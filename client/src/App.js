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
import Landing from './pages/Landing';
import Gallery from './pages/Gallery';
import Profile from './pages/Profile';

const httpLink = createHttpLink({
  uri: "/graphql",
})


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

    return { headers: {
      ...headers, 
      authorization: token ?`Bearer ${ token }`: "",
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


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
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<ArtistSignup />} />
              <Route path='/gallery' element={<Gallery currentCategory={currentCategory}
              >
              </Gallery>} />
            </Routes>
          </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;