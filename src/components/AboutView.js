import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="this is About US" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">  
              Welcome to our About Us page! At moviebrowser, we are passionate about crafting exceptional digital experiences using React. 
              Our dedicated team of React developers is committed to delivering cutting-edge solutions that blend creativity and functionality. 
              With a focus on user-centric design and the latest web technologies, we strive to bring your vision to life. 
              Whether you're looking to build a dynamic web application or enhance an existing one, we leverage the power of React 
              to create responsive, scalable, and visually appealing interfaces. Our mission is to provide innovative React solutions 
              that not only meet but exceed your expectations. Explore more about our journey and the skilled professionals behind our success. 
              Thank you for considering moviebrowser as your React development partner.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
