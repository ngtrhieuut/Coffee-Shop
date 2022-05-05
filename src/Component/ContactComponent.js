function ContactComponent() {

    const handleNumber = (e) => {
        if ((e.target.value.length) === 10) {
            return false
        } 
    }

    const handleGuests = (e) => {
        if ((e.target.value.length) === 2) {
            return false
        } 
    }

    return ( 
        <section className="contact" id="contact">

            <div className="heading">
                <img src="./assets/images/heading-img.png" alt="" />
                <h3>contact us</h3>
            </div>

            <div className="row">

                <div className="image">
                    <img src="./assets/images/contact-img.svg" alt="" />
                </div>

                <form action="" method="post">
                    <h3>book a table</h3>
                    <input type="text" name="name" required className="box" maxLength="20" placeholder="enter your name" />
                    <input type="number" name="number" required className="box" maxLength="20" placeholder="enter your number" min="0" max="9999999999" onKeyPress={e => handleNumber(e)} />
                    <input type="number" name="guests" required className="box" maxLength="20" placeholder="how many guests" min="0" max="99" 
                    onKeyPress={e => handleGuests(e)} />
                    <input type="submit" name="send" value="send message" className="btn" />
                </form>

            </div>

        </section>
     );
}

export default ContactComponent;