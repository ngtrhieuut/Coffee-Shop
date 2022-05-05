function FooterComponent() {
    return ( 
        <section className="footer">

            <div className="box-container">

                <div className="box">
                    <i className="fas fa-envelope"></i>
                    <h3>our email</h3>
                    <p>shaikhanas@gmail.com</p>
                    <p>anasbhai@gmail.com</p>
                </div>

                <div className="box">
                    <i className="fas fa-clock"></i>
                    <h3>opening hours</h3>
                    <p>07:00am to 09:00pm</p>
                </div>

                <div className="box">
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>shop location</h3>
                    <p>mumbai, india - 400104</p>
                </div>

                <div className="box">
                    <i className="fas fa-phone"></i>
                    <h3>our number</h3>
                    <p>+123-456-7890</p>
                    <p>+111-222-3333</p>
                </div>

            </div>

            <div className="credit"> &copy; copyright @ 2022 by <span>mr. web designer</span> | all rights reserved! </div>

        </section>
     );
}

export default FooterComponent;