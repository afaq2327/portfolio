import SocialLinks from './social'
import './footer.css'

const Footer = props => {
    return (
      <footer>
        <div className="wrapper">
          <h3>THANKS FOR VISITING</h3>
          <p>© {new Date().getFullYear()} Afaq Ahmed.</p>
          <SocialLinks />
        </div>
      </footer>
    );
};

export default Footer