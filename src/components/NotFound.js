const NotFound = () => {
    const sadDogImageUrl = `https://cdn.dribbble.com/users/752120/screenshots/2144770/media/1bd108977fe30698144ce217c958aa75.png?resize=450x338&vertical=center`;

    return (
      <div className="d-flex justify-content-center align-items-center style={{ height: '100vh' }} position-relative">
        <img
          src={sadDogImageUrl} 
          alt="Sad Dog"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <h1
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '40px',
            textAlign: 'center',
            color: 'red',
          }}
        >
          404 - Not Found
        </h1>
      </div>
    );
  };
  
  export default NotFound;
  