import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const color = "#333";

const Navbar = () => {
  return (
    <header
      css={css`
        background-color: ${color};
        padding: 15px;
      `}
    >
      <Link to="/"> Adopt me </Link>
      <span
        css={css`
          font-size: 60px;
        `}
        role="img"
        aria-label="logo"
      >
        🐕
      </span>
    </header>
  );
};

export default Navbar;
