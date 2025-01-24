"use client";

import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

const Link = ({ href, className, children }) => {
  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: "",
};

export default Link;
