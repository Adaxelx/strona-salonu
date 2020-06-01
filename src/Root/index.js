import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NavM from "Components/Nav";
import Nav from "Components/Nav/Deskt";
import Start from "Views/StartPage";
import GalleryPage from "Views/GalleryPage";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  windowWidth = window.innerWidth;
  state = {
    active: false
  };

  handleClick = () => {
    this.setState({
      active: !this.state.active
    });
  };
  render() {
    const { active } = this.state;
    const { handleClick } = this;
    return (
      <Router basename={process.env.PUBLIC_URL}>
        {this.windowWidth >= 1280 ? (
          <Nav active={active} handleClick={handleClick} />
        ) : (
          <NavM active={active} handleClick={handleClick} />
        )}
        <Route
          render={({ location }) => (
            <>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={1500}
                >
                  <Switch location={location}>
                    <Route path="/" exact component={Start} />
                    <Route
                      path={`${process.env.PUBLIC_URL}/gallery`}
                      exact
                      component={GalleryPage}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </>
          )}
        />
      </Router>
    );
  }
}

export default App;
