import profilepic from './assets/images2.jpeg';

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilepic} alt="Image is not available" />
      <h2 className='card-title'>Bro Code</h2>
      <p className='card-text'>I make YouTube videos and play video games.</p>
    </div>
  );
}

export default Card;
