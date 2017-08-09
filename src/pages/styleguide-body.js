import React, { Component } from 'react';

export class StyleguideBody extends Component {
  render() {
    return (
      <article className="styleguide-body">
        <section>
          <h2>Principles</h2>

          <p>As Urbit becomes ready for real user applications, it needs a world-class design philosophy. Fortunately, most of the work here has been done for us. Minimalism is pretty good. We're a fan of clean design, usable engineering paradigms, and other fun good stuff and positive words.</p>
        </section>

        <section className="section-geometry">
          <h3 className="mb8">Geometry</h3>
          <h4 className="mb4">Fixed</h4>
          <div className="row mb2">
            <div className="w8 display-box">48</div>
            <div className="w8 display-box">48</div>
            <div className="w8 display-box">48</div>
          </div>

          <div className="row mb2">
            <div className="w16 display-box">96</div>
            <div className="w16 display-box">96</div>
            <div className="w16 display-box">96</div>
          </div>

          <div className="row mb8">
            <div className="w32 display-box mb2">192</div>
            <div className="w32 display-box mb2">192</div>
            <div className="w32 display-box mb2">192</div>
          </div>

          <h4 className="mb4">Fluid</h4>
          <div className="row mb2">
            <div className="col-xs-2">
              <div className="display-box">2</div>
            </div>
            <div className="col-xs-7">
              <div className="display-box">7</div>
            </div>
            <div className="col-xs-3">
              <div className="display-box">3</div>
            </div>
          </div>

          <div className="row mb2">
            <div className="col-xs-4">
              <div className="display-box">4</div>
            </div>
            <div className="col-xs-4">
              <div className="display-box">4</div>
            </div>
            <div className="col-xs-4">
              <div className="display-box">4</div>
            </div>
          </div>

          <div className="row mb8">
            <div className="col-xs-9">
              <div className="display-box">9</div>
            </div>
            <div className="col-xs-2">
              <div className="display-box">2</div>
            </div>
            <div className="col-xs-1">
              <div className="display-box">1</div>
            </div>
          </div>

          <h4 className="mb4">Flexible</h4>
          <div className="row mb2">
            <div className="col-sm-6 col-md-4">
              <div className="display-box">sm6, md4</div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="display-box">sm6, md4</div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="display-box">sm6, md4</div>
            </div>
          </div>

          <div className="row mb2">
            <div className="col-xs-4">
              <div className="display-box">4</div>
            </div>
            <div className="col-xs-4">
              <div className="display-box">4</div>
            </div>
            <div className="col-xs-4">
              <div className="display-box">4</div>
            </div>
          </div>

          <div className="row mb8">
            <div className="col-xs-9">
              <div className="display-box">9</div>
            </div>
            <div className="col-xs-2">
              <div className="display-box">2</div>
            </div>
            <div className="col-xs-1">
              <div className="display-box">1</div>
            </div>
          </div>
        </section>

        <section>
          <h3>Typography</h3>

          <div className="split-half">
            <p>To maintain a pleasing vertical rhythym, Urbit's typographic baseline (and all other elements) are sized as multiples of <strong>6px</strong>. This is also the base font-size, supporting easy REM styling. We've included defaults to make arbitrary arrangements of Markdown components to work cohesively. Additionally, all Typographic elements in elements are equipped with weapons-grade retro encabulators, to support dual marzel veins and prevent side-fumbling. </p>

            <div className="type-headings">
              <h1 className="nomarg">Heading one</h1>
              <h2 className="nomarg">Heading two</h2>
              <h3 className="nomarg">Heading three</h3>
              <h4 className="nomarg">Heading four</h4>
              <h5 className="nomarg">Heading five</h5>
            </div>
          </div>

          <h4>Code</h4>
          <pre className="code-block"><code className="code-text">
{`<h1>Heading one</h1>
<h2>Heading two</h2>
<h3>Heading three</h3>
<h4>Heading four</h4>
<h5>Heading five</h5>

<p>Suspendisse potenti. Vestibulum condimentum leo ex, quis pellentesque orci sagittis non. Cras id mollis dui. Duis ex risus, condimentum quis porta lobortis, viverra non mi. Integer non semper felis. Aenean ut fermentum purus.</p>

<em>italics</em>
<strong>bold</strong>
<u>underline</u>
`}
          </code></pre>
        </section>

        <section>
          <h3>Buttons</h3>
          <button className="btn">Serious action</button>
          <button className="btn btn-primary">Serious action</button>
          <button className="btn btn-secondary">Serious action</button>
          <button className="btn btn-tetiary">Serious action</button>
          <button className="btn btn-warning">Serious action</button>

          <h3>Button groups</h3>
          <div className="btn-group">
            <button type="button" className="btn btn-secondary active">Active</button>
            <button type="button" className="btn btn-tetiary">Inactive</button>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-secondary">Active</button>
            <button type="button" className="btn btn-tetiary active">Inactive</button>
          </div>
          <h3>Forms</h3>
          <div className="input-group">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="input-group error">
            <label>Age</label>
            <input type="text" value="John" />
            <div className="error-label">Age must be a number.</div>
          </div>
          <div className="input-group">
            <label>Message</label>
            <textarea rows="6" />
          </div>
          <button type="submit" className="btn btn-secondary">Send</button>
        </section>

        <section className="sp-60">
          <pre className="code-block"><code className="code-text">
{`++  watch-dir
  |=  a/path
  ^-  (list move)
  =/  soc/sock
    [our.hid our.hid]
  =/  rav/rave
    [%next %z da+now.hid a]
  =/  rif/riff
    [%home [~ rav]]
  =/  car/card
    :^
      %warp
      a
      soc
      rif
  [[ost.hid car] ~]
`}
          </code></pre>
        </section>
      </article>
    );
  }
}
