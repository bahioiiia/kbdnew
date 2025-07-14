import React from 'react';
import s from './Layout.module.css';
import Header from './Header/Header';
import Search from './Search/Search';   
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import menuitems from './menu.json';

const Layout = () => {
    return (
        <>
            <header className={s.header}>
                <div className={s.container}>
                    <Header />
                </div>
            </header>
            <main className={`${s.main} ${s.container}`}>
                <Logo className={s.logos} />
                <Search className={s.search} />
                <Menu className={s.menu} items={menuitems} />
                <Main
                    className={s.mainContent}
                    title="Main Content"
                >
                    <p>This is the main content area.</p>
                </Main>
            </main>
            <footer className={s.footer}>
                <div className={s.container}>
                    <Footer />
                </div>
            </footer>
        </>
    );
};

export default Layout;