import React, { forwardRef } from "react";
import { Helmet } from "react-helmet";

const Page = forwardRef((props, ref) => {
  const { children, title = "", ...rest } = props;
  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

export default Page;
