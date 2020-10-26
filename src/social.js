import './social.css'
const SocialLinks = props => {
    return (
      <div className="social">
        <a
          href="https://linkedin.com/in/afaq-ahmed-5799a9128"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Twitter profile"
        >
          {' '}
          <i className="fab fa-linkedin" />
        </a>
        <a
          id="profile-link"
          href="https://github.com/afaq2327"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's GitHub Profile"
        >
          {' '}
          <i className="fab fa-github" />
        </a>
        <a
          href="https://codepen.io/afaq-ahmed"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Codepen Profile"
        >
          {' '}
          <i className="fab fa-codepen" />
        </a>
      </div>
    );
}

export default SocialLinks