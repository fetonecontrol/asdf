import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import Frog from '../images/Frog.jpg'
// import frog from 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnews.nationalgeographic.com%2Fcontent%2Fdam%2Fnews%2Fphotos%2F000%2F842%2F84214.ngsversion.1422286683017.adapt.1900.1.jpg&f=1&nofb=1'
// import { connect } from 'react-redux';
// import { makeApiCall } from './../actions';
// import ApiCall from './ApiCall'

const mapStyles = {
  width: '50%',
  height: '50%'
};



class Main extends React.Component {
  
    // componentDidMount() {
    //   const { dispatch } = this.props;
    //   dispatch(makeApiCall());
    // }

    render() {
      let close = (
        <div
          className="close"
          onClick={() => {
            this.props.onCloseArticle()
          }}
        ></div>
      )
      return (
        <div
          ref={this.props.setWrapperRef}
          id="main"
          style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
        >
          <article
            id="intro"
            className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
              }`}
            style={{ display: 'none' }}
          >
            <h1 className="major">ABOUT</h1>
            <span className="image main">
              {/* <a href="" /> */}
              <img src={Frog} alt="frog pic" />
            </span>
              <p>
                This was a two day project to explore bootstrapping a React application with Gatsby. It was also an opportunity to explore SASS. Funderstanding with SASS, CSS3, HTML5, ES6 JavaScript, and the Google Maps API.
              </p>
                
              {close}
            </article>

            <article
              id="work"
              className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
                }`}
              style={{ display: 'none' }}
            >
              <h1 className="major">WORK</h1>
              <span className="image main">
                
                <img src={pic02} alt="" />
              </span>
              <p>
                
              </p>
              {close}
            </article>

            <article
              id="about"
              className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
                }`}
              style={{ display: 'none' }}
            >
              <h1 className="major">TECH</h1>
              <span className="image main">
                <img src={pic03} alt="" />
              </span>
              <ul>
                  <li>VS Code</li>
                  <li>Node.js</li>
                  <li>NPM</li>
                  <li>Gatsby.js</li>
                  <li>React.js</li>
                  <li>GitHub</li>
                  <li>Netlify</li>
                </ul>
              {close}
            </article>

            <article
              id="contact"
              className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
                }`}
              style={{ display: 'none' }}
            >
              <h2 className="major">Contact</h2>
              <form method="post" action="#">
                <div className="field half first">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="4"></textarea>
                </div>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" className="special" />
                  </li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                </ul>
              </form>
              <ul className="icons">
                <li>
                  <a
                    href="https://twitter.com/HuntaroSan"
                    className="icon fa-twitter"
                  >
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="https://codebushi.com" className="icon fa-facebook">
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://codebushi.com" className="icon fa-instagram">
                    <span className="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/codebushi/gatsby-starter-dimension"
                    className="icon fa-github"
                  >
                    <span className="label">GitHub</span>
                  </a>
                </li>
              </ul>
              {close}
            </article>
        </div>
      )
    }
  }

  Main.propTypes = {
            route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
  }

  // const mapStateToProps = state => {
  //   return {
  //     weatherdata: state.weatherdata,
  //     isLoading: state.isLoading,
  //     error: state.error
  //   }
  // }


export default Main;

