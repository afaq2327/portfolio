import React,{Component} from 'react'
import './Portfolio.css';
import Menu from './menu'
import Nav from './navbar'
import Header from './header'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import Footer from './footer'

class Portfolio extends Component{
    constructor(props){
      super(props)
      this.state = {
        menuState:'deactive'
      }
    }

    toggleMenu = ()=>{
      this.state.menuState === 'active' ?
      this.setState({
        menuState:'deactive'
      })
      :
      this.setState({
        menuState:'active'
      })
    }

    componentDidMount() {
      const navbar = document.querySelector('#navbar');
      const header = document.querySelector('#welcome-section');
      const forest = document.querySelector('.forest');
      const silhouette = document.querySelector('.silhouette');
      let forestInitPos = -300;
  
      window.onscroll = () => {
        let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
        if (scrollPos <= window.innerHeight) {
          silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
          forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
        }
  
        if (scrollPos - 100 <= window.innerHeight)
          header.style.visibility = header.style.visibility === 'hidden' && 'visible';
        else header.style.visibility = 'hidden';
  
        if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
        else navbar.classList.remove('bg-active');
      };
  
      (function navSmoothScrolling() {
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        for (let i in internalLinks) {
          if (internalLinks.hasOwnProperty(i)) {
            internalLinks[i].addEventListener('click', e => {
              e.preventDefault();
              document.querySelector(internalLinks[i].hash).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
              });
            });
          }
        }
      })();
    }

    render(){
      return(
        <div className='App'>
          <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState}/>
          <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )
    }


}

export default Portfolio
