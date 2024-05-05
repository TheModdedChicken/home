import { type Component } from 'solid-js';
import { Routes, Route, NavLink, Navigate } from '@solidjs/router';
import NavBar from './components/NavBar';

import About from './pages/About';
import Thoughts from './pages/Thoughts';
import Projects from './pages/Projects';
import Socials from './pages/Socials';

import styles from './App.module.css';
import Project from './pages/Project';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <NavBar pages={[
          { name: 'about', href: '/about' },
          { name: 'projects', href: '/projects' },
          //{ name: 'Thoughts', href: '/thoughts' },
          { name: 'socials', href: '/socials' }
        ]} />
      </header>
      <div class={styles.page}>
        <Routes>

          <Route path='/' element={<Navigate href='/about'></Navigate>} />
          <Route path='/about' component={About} />
          <Route path='/projects'>
            <Route path='/' component={Projects} />
            <Route path='/:repo' component={Project} />
          </Route>
          <Route path='/thoughts' component={Thoughts} />
          <Route path='/socials' component={Socials} />

          <Route path='/*' element={<h5>404 Not Found</h5>} />

        </Routes>
      </div>
    </div>
  );
};

export default App;