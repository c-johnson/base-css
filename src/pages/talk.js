import React, { Component } from 'react';

export class TalkPage extends Component {
  render() {
    return (
      <article id="talk-body">
        <section id="talk">
          <h3>Talk</h3>
          <div className="message">
            <div className="message-title">
              <span><strong>~tocreb-hosrys</strong></span>
              <span className="message-stamp">21m</span>
            </div>
            <div classNAme="message-body">
              <p>I think I'm still growing.</p>
              <p>The more people I meet, the more cultures I start to embrace, the more people I open myself up to—it's a growing process I'm excited about.</p>
            </div>
          </div>

          <div className="message">
            <div className="message-title">
              <span><strong>~sabdel-rivsyd</strong></span>
              <span className="message-stamp">19m</span>
            </div>
            <div classNAme="message-body">
              <p>And then I spent a month in Connecticut with my boyfriend.</p>
            </div>
          </div>

          <div className="message">
            <div className="message-title">
              <span><strong>~pocsel-bardux</strong></span>
              <span className="message-stamp">15m</span>
            </div>
            <div classNAme="message-body">
              <p>Was Africa your "Oh, shit, I made it"</p>
            </div>
          </div>
        </section>
      </article>
    );
  }
}
