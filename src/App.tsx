import { type Component } from 'solid-js';
import { Routes, Route, NavLink, Navigate } from '@solidjs/router';
import NavBar from './components/NavBar';

import styles from './App.module.css';

import About from './pages/About';
import Repos from './pages/Repos';
import Socials from './pages/Socials';
import Artworks from './pages/Artworks';
import Things from './pages/Things';
import { MetaProvider, Title } from '@solidjs/meta';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Title>Logan Shaw</Title>
      <header class={styles.header}>
        <NavBar pages={[
          { name: 'about', href: '/about' },
          { name: 'things', href: '/things' },
          { name: 'socials', href: '/socials' }
        ]} />
      </header>
      <div class={styles.page}>
        <Routes>

          <Route path='/' element={<Navigate href='/about'></Navigate>} />
          <Route path='/about' component={About} />
          <Route path='/things'>
            <Route path='/' component={Things} />
            <Route path='/repos' component={Repos} />
            <Route path='/artworks' component={Artworks} />
          </Route>

          <Route path='/repos' element={<Navigate href='/things/repos'></Navigate>} />
          <Route path='/artworks' element={<Navigate href='/things/artworks'></Navigate>} />

          <Route path='/socials' component={Socials} />
          <Route path='/*' element={<h5>404 Not Found</h5>} />

        </Routes>
      </div>
    </div>
  );
};

export default App;