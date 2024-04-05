import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
//import { Route,  Routes } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
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
      <HelmetProvider>
           <Helmet prioritizeSeoTags>
              <title>Titlle lending</title>
              <meta property="og:title" content="A very important title"/>
              <link rel="canonical" href="https://www.tacobell.com" />
              <meta name="whatever" value="notImportant" />
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
        </HelmetProvider>
  </LanguageProvider>
);
}

export default App;
