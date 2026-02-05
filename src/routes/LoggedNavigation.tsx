import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Artists, Artist, Albums, Album, Profile } from "../pages";
import { LoggedLayout } from "../layouts";
export function LoggedNavigation() {
  return (
    <HashRouter>
      <LoggedLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/album/:id" element={<Album />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </LoggedLayout>
    </HashRouter>
  );
}
