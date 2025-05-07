import React,{ useState, useEffect } from "react";
import JsonData from "../data/data.json";

export const Navigation = (props) => {

   const [landingPageData, setLandingPageData] = useState({});
    const [isFixed, setIsFixed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLandingPageData(JsonData);
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50); // adjust threshold if needed
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // cleanup
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div id="home" className="home">
 <header className="header">
      <div className="topbar">
         <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <ul className="top-link">
              
              </ul>

            </div>
            <div className="col-lg-6 col-md-7 col-12">

              <ul className="top-contact">
                <li><i className="fa fa-phone"></i>+251911461752</li>
                <li><i className="fa fa-envelope"></i><a href="mailto:support@yourmail.com">support@yourmail.com</a></li>
              </ul>

            </div>
          </div>
         </div>
      <div>
      <nav  className={`navbar navbar-default navcustome ${isFixed ? 'navbar-fixed-top' : ''}`}>
        <div className="container menuholder">
          {/* Toggle Button for Mobile */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              onClick={toggleNavbar}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#home">
              <img src="img/logo.png" alt="logo" className="logo" />
            </a>
          </div>

          {/* Collapse Menu */}
          <div
              className={`collapse navbar-collapse text-center ${isOpen ? 'in' : ''}`}
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right collapse-menu">
                <li><a href="#home" onClick={closeNavbar}>Home</a></li>
                <li><a href="#about" onClick={closeNavbar}>About</a></li>
                <li><a href="#product" onClick={closeNavbar}>Product</a></li>
                <li><a href="#contact" onClick={closeNavbar}>Contact</a></li>
              </ul>
            </div>
        </div>
      </nav>
        </div>
      </div>
      </header>
	
		

		<section className="slider">
			<div className="hero-slider">
		
				<div className="single-slider"
               style={{
                backgroundImage: 'url(img/slider.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-7">
								<div className="text">
									<h1>Where <span>Expertise</span> Meets <span>Efficiency!</span></h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
									<div className="button">
										
										<a href="#" className="btn primary">Learn More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
        <div className="single-slider"
             style={{
              backgroundImage: 'url(img/slider2.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }} >
					<div className="container">
						<div className="row">
							<div className="col-lg-7">
								<div className="text">
									<h1>International <span>Integrity, </span> Domestic <span>Precision!</span></h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
									<div className="button">
										
										<a href="#" className="btn primary">Learn More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
        <div className="single-slider"
                  style={{
                    backgroundImage: 'url(img/slider3.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-7">
								<div className="text">
									<h1>Think <span>Globally</span> Import <span>Extensively!</span></h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
									<div className="button">
										
										<a href="#" className="btn primary">Learn More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
</div>
  );
};
