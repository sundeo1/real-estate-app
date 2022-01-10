import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import About from "../containers/About";
import Contact from "../containers/Contact";
import Listings from "../containers/Listings";
import ListingDetail from "../containers/ListingDetail";
import Login from "../containers/Login";
import SignUp from "../containers/SignUp";
import NotFound from "../components/NotFound";
import Layout from "../hocs/Layout";

const Navigator = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/listings" element={<Listings />} />
          <Route exact path="/listings/:id" element={<ListingDetail />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Navigator;
