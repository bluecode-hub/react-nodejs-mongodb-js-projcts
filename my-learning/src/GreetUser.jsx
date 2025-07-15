import PropTypes from 'prop-types';

function GreetUser({ username = "guest", isLoggedin = false }) {
  const welcomePrompt = <h2 className="welcome-message">Welcome {username}</h2>;
  const notPrompt = <h2 className="prompt-message">You are not logged in</h2>;
  return isLoggedin ? welcomePrompt : notPrompt;
}

// Optional: still include propTypes for type checking
GreetUser.propTypes = {
  username: PropTypes.string,
  isLoggedin: PropTypes.bool,
};

export default GreetUser;
