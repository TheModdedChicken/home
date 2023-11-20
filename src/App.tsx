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
        <div class={styles.aboutme_nameplate}>
          <text><b>Logan Shaw</b></text> <br/>
          <p style={{ color: '#7A7A7A' }}>aka TheModdedChicken</p>
        </div>

        <NavBar pages={[ 
          { name: 'About', href: '/about' },    
          { name: 'Projects', href: '/projects' },
          //{ name: 'Thoughts', href: '/thoughts' },
          { name: 'Socials', href: '/socials' }
        ]}/>
      </header>
      <div style={{ "min-width": '100%' }}>
        <Routes>

        <Route path='/' element={<Navigate href='/about'></Navigate>} />
        <Route path='/about' component={About} />
        <Route path='/projects'>
          <Route path='/' component={Projects}/>
          <Route path='/:repo' component={Project}/>
        </Route>
        <Route path='/thoughts' component={Thoughts}/>
        <Route path='/socials' component={Socials}/>

        <Route path='/*' element={<h5>404 Not Found</h5>}/>

        </Routes>
      </div>
    </div>
  );
};

export default App;