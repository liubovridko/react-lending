//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
//import { Route,  Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
// import Home from './pages/Home';
// import Gallery from './pages/Gallery';
// import Service from './pages/Service';
// import Contacts from './pages/Contacts';
// import NotFound from './pages/NotFound';
import { LanguageProvider } from './LanguageContext';
import Home from './pages/Home';

function App() {
  return (
    <LanguageProvider>
       <Helmet>
        <title>Home Page</title>
        <meta name="description" content="This is the home page" />
      </Helmet>
       <main className='wrapper'>
          <Header />
            <div className='content'>
            <Home/>
           <>
          {/* <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/service" component={Service} />
            <Route path="/contacts" component={Contacts} />
            <Route path="*" component={NotFound} />
          </Routes> */}
          </>
          </div>
          <Footer />
        </main>
  </LanguageProvider>
);
}

export default App;
