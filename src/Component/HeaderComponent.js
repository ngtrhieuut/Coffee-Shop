function HeaderComponent() {
    return ( 
        <header className="header">

            <section className="flex">
        
            <a href="#home" className="logo"><img src="./assets/images/logo.png" alt="" /></a>
        
            <nav className="navbar">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#menu">menu</a>
                <a href="#gallery">gallery</a>
                <a href="#team">team</a>
                <a href="#contact">contact</a>
            </nav>
        
            <div id="menu-btn" className="fas fa-bars"></div>
        
            </section>
    
        </header>
    );
}

export default HeaderComponent;