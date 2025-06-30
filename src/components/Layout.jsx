import React from 'react';
import s from './layout.module.css';
import Header from './Header/Header';
import Search from './Search/Search';   
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import Main from './Main/Main';

const Layout = () => {
    return (
        <>
            <header className={s.header}>
                <div className={s.container}>
                    <Header />
                </div>
            </header>
            <main className={`${s.main} ${s.container}`}>
                <Logo className={s.logo} />
                <Search className={s.search} />
                <Menu className={s.menu} />
                <Main />
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