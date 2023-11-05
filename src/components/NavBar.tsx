import { createSignal, type Component, JSX, createEffect } from 'solid-js';

import styles from './NavBar.module.css';
import { A, useLocation } from '@solidjs/router';

interface NavBarPage {
  href: string
  name: string
  subpages?: NavBarPage[]
}

interface NavBarProps {
  pages: NavBarPage[]
}

const NavBar: Component<NavBarProps> = (props) => {
  const location = useLocation();

  const spacer = '-------------------------------';

  return (
    <div class={styles.navbar}>
      <text>{spacer}</text>

      <div class={styles.navbar_pages}>

        {
          props.pages.map((p) => {
            const isCurrentPage = location.pathname === p.href;
            const bracket = isCurrentPage ? ['>', '<'] : ['[', ']'];

            return (
              <>
                <A href={p.href} style={{ 
                  'text-decoration': isCurrentPage ? 'underline' : 'none',
                  color: isCurrentPage ? '#144070' : undefined
                }}>
                  <h6 style={{ margin: '0' }}>
                    {bracket[0]}{p.name}{bracket[1]}
                  </h6>
                </A>
                {
                  (
                    props.pages.length <= 1 || 
                    props.pages.findIndex(pf => pf.href === p.href && pf.name === p.name) !== (props.pages.length - 1)
                  )
                  ? (<><br/><p style={{ margin: '0 10px' }}>|</p></>)
                  : <></>
                }
              </>
            )
          })
        }

      </div>

      <text>{spacer}</text>
    </div>
  );
};

export default NavBar;
