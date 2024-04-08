import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home/Home";

export const Router = memo(() => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
});

const NotFound = () => <h1>Page Not Found</h1>;
