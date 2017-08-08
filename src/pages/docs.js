import React, { Component } from 'react';

export class DocsPage extends Component {
  render() {
    return (
      <article id="docs-body">
        <section id="docs">
          <h1>Install</h1>
          <p>Installing Urbit is easy. It just takes a few minutes to get an instance up and running on the network.</p>
          <p>Urbit is designed to run on any Unix box with an internet connection. Debian (jessie), Mac OS X, FreeBSD and Fedora all work well.</p>
          <p>If you run into trouble installing Urbit, please let us know via email, questions@urbit.org, or on the forum: urbit.org/fora. You can also chat with us at urbit.org/stream.</p>
          <blockquote>
            Urbit is alpha software. It’s not yet completely stable, its crypto hasn’t been audited, and there are plenty of rough edges. Urbit is lots of fun to play with, but not quite ready for your important or sensitive data.
          </blockquote>

          <h3>Packages</h3>
          <p>Urbit may be in your system's package repository — check there first. If not, we host packages for some platforms. If you'd prefer to install from source, see below.</p>

          <h4>Mac OS X (Homebrew)</h4>
          <ul>
            <li className="text-mono">brew update</li>
            <li className="text-mono">brew install urbit</li>
          </ul>

          <h4>FreeBSD</h4>
          <ul>
            <li className="text-mono">brew update</li>
            <li className="text-mono">brew install urbit</li>
          </ul>

          <h3>Source</h3>
          <p>Urbit may be in your system's package repository — check there first. If not, we host packages for some platforms. If you'd prefer to install from source, see below.</p>

          <h4>Dependencies</h4>
          <pre className="code-block">
            <code>
{`C compiler (gcc or clang)
automake
autoconf
libtool
cmake
ragel
re2c
libcurl
curses
gmp
libsigsegv
openssl`}
            </code>
          </pre>
        </section>
      </article>
    );
  }
}
