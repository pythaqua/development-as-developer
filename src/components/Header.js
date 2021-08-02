import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import Score from './Score';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.getGravatar = this.getGravatar.bind(this);
  }

  getGravatar() {
    const { email } = this.props;
    const hash = md5(email).toString();
    const urlImage = `https://www.gravatar.com/avatar/${hash}?s=200`;
    return urlImage;
  }

  render() {
    const { name } = this.props;
    return (
      <header>
        <img
          alt="perfil-Gravatar"
          src={ this.getGravatar() }
          data-testid="header-profile-picture"
        />
        <p data-testid="header-player-name">{name}</p>
        <Score />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  name: state.user.name,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.string,
}.isRequired;
