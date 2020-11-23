import { graphql, Link, StaticQuery } from "gatsby";
import React from 'react';
import './Header.css';

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title,
            description
          }
        }
      }
    `}
    render={data => (
      <header className="header">
        <Link to="/">
          <h1 className="header-title">{data.site.siteMetadata.title}</h1>
          <small>{data.site.siteMetadata.description}</small>
        </Link>
      </header>
    )}
  />
)