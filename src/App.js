import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import NavM from './MobileComponents/Nav/NavM.js'
import Logo from './MobileComponents/Logo.js'
import Start from './MobileComponents/StartPage.js'
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

  render() {
    return (
      // <section className='container'>
        <Router>
        {/* <Logo/> */}
        <NavM/>
        <Route render={({ location }) => (
          <div>
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
                <Route path="/offer" exact component={Start} />
            </Switch>
            </CSSTransition>
            </TransitionGroup>
          </div>
        )}/>
      </Router>
    //  </section>
     );
}
}

export default App;

