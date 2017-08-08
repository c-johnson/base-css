import React, { Component } from 'react';
import './css/custom.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { StyleguideBody } from './pages/styleguide-body';
import { NotesPage } from './pages/notes';
import { NotesPage2 } from './pages/notes2';
import { DocsPage } from './pages/docs';
import { TalkPage } from './pages/talk';
import { ProfilePage } from './pages/profile';
import { TypographyPage } from './pages/typography';
import { TypographyPage2 } from './pages/typography2';

export class FullPage extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {/*}
          <div className="nav-top">
            <img src="icons/icon-hamburger.png" />
            <img src="icons/icon-circle.png" />
            <img src="icons/icon-triangle.png" />
          </div>
          */}

          <section>
            <div className="hero">
              <div className="urbit-logo urbit-logo-solid"></div>
              <h1>Styl</h1>
            </div>
            <div className="examples-nav">{/* Grids on 7-14 */}
              <Link to="/">Guide</Link>
              <div className="examples-subnav">
                <Link to="/examples/docs">Docs</Link>
                <Link to="/examples/type">Type</Link>
                <Link to="/examples/type2">Type2</Link>
                <Link to="/examples/notes">Notes</Link>
                <Link to="/examples/notes2">Notes2</Link>
                <Link to="/examples/talk">Talk</Link>
                <Link to="/examples/profile">Profile</Link>
              </div>
            </div>
          </section>

          <Route exact path="/" component={StyleguideBody} />
          <Route path="/examples/docs" component={DocsPage} />
          <Route path="/examples/type" component={TypographyPage} />
          <Route path="/examples/type2" component={TypographyPage2} />
          <Route path="/examples/notes" component={NotesPage} />
          <Route path="/examples/notes2" component={NotesPage2} />
          <Route path="/examples/talk" component={TalkPage} />
          <Route path="/examples/profile" component={ProfilePage} />

          <br />

          <footer>
            <ul className="nav-links">
              <li><a href="#"><u>About</u></a></li>
              <li><a href="#"><u>Contact</u></a></li>
              <li><span className="text-light">© 2017</span></li>
            </ul>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}
