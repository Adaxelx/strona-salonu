import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import NavM from './MobileComponents/Nav/NavM.js'
import Nav from './DesktopComponents/navBtnDesk.js'
// import Logo from './MobileComponents/Logo.js'
import Start from './MobileComponents/StartPage.js'

/* test components */

import AboutMe from './MobileComponents/AboutPage.js'
import Visit from './MobileComponents/VisitPage.js'
import ContactPage from './MobileComponents/ContactPage.js'
import GalleryPage from './MobileComponents/GalleryPage.js'
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom'

// class App extends Component {
//   render() {
//     return (
//      <>
//         <Router>
//           <Route render={({ location }) => (
//             <Route exact path="/" render={() => (
//               <Redirect to="/start"/>
//             )}/>

//               <Logo/>
//               <NavM/>
//             <TransitionGroup>
//             <CSSTransition
//                   key={location.key}
//                   classNames="fade"
//                   timeout={1000}>
//               <Switch location={location}>
//                 <Route link='/' exact component={Home}/>>
//               </Switch>
//            </CSSTransition>
//            </TransitionGroup>
//             )}/>
//         </Router>
//      </>
//     );
//   }
// }


class App extends React.Component{
  windowWidth = window.innerWidth
  render() {
    return (
      // <section className='container'>
        <Router basename={process.env.PUBLIC_URL}>
        {/* <Logo/> */}
        {this.windowWidth >= 1280 ? <Nav/> : <NavM/>}
          <Route render={({ location }) => (
          <>
            {/* <Route exact path="/" render={() => (
              <Redirect to="/start"/>
            )}/> */}
                <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={1500}
                >
            <Switch location={location}>
                <Route path="/" exact component={Start} />
                <Route path="/gallery" exact component={GalleryPage} />
                <Route path="/contact" exact component={ContactPage} />
            </Switch>
            </CSSTransition>
            </TransitionGroup>
          </>
        )}/>
      </Router>

  //  </section>
     );
}
}

export default App;

