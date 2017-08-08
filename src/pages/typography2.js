import React, { Component } from 'react';

export class TypographyPage2 extends Component {
  render() {
    return (
      <section>
        <h1>Heading one</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus <span className="code-text">rm -rf *</span>, dapibus iaculis lectus vel, rutrum consequat libero. Nunc sit amet enim purus.</p>

        <p>Suspendisse potenti. Vestibulum condimentum leo ex, quis pellentesque orci sagittis non. Cras id mollis dui. Duis ex risus, condimentum quis porta lobortis, viverra non mi. Integer non semper felis. Aenean ut fermentum purus. Praesent id placerat justo. Suspendisse mattis, diam nec lacinia auctor, lacus eros sodales turpis, id mattis arcu erat volutpat tellus. Vivamus ultrices tincidunt odio nec aliquam. Etiam at purus scelerisque, ultrices risus at, dictum ante. Curabitur id felis sit amet turpis mollis fermentum. Fusce congue velit mi, nec mattis leo malesuada non.</p>

        <blockquote>
          Duis ex risus, condimentum quis porta lobortis, viverra non mi. Integer non semper felis. Aenean ut fermentum purus. Praesent id placerat justo. Suspendisse mattis, diam nec lacinia auctor, lacus eros sodales turpis, id mattis arcu erat volutpat tellus.
        </blockquote>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus urna, dapibus iaculis lectus vel, rutrum consequat libero. Nunc sit amet enim purus.</p>

        <h2>Heading two</h2>

        <p><strong>Duis ex risus, condimentum quis porta lobortis, viverra non mi. Integer non semper felis. </strong></p>

        <ul>
          <li>Aenean ut fermentum purus.</li>
          <li>
            Praesent id placerat justo.
            <ul>
              <li>Nestem listem excellento</li>
              <li>Morem bulleto es vivi</li>
            </ul>
          </li>
          <li>Suspendisse mattis, diam nec lacinia auctor, lacus eros sodales turpis, id mattis arcu erat volutpat tellus.</li>
        </ul>
      </section>
    );
  }
}
