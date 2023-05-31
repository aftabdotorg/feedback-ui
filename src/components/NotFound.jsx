import { Link } from 'react-router-dom';

const NotFound = () => {
  const imgStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  };

  return (
    <>
      <img
        src="https://miro.medium.com/v2/resize:fit:640/0*QOZm9X5er1Y0r5-t"
        alt="notfound"
        style={imgStyles}
      />
      <h2 style={{ textAlign: 'center' , marginTop:"1rem"}}>
        <Link style={{ color: 'whitesmoke' }} to="/">
          Back to Home
        </Link>
      </h2>
    </>
  );
};

export default NotFound;
