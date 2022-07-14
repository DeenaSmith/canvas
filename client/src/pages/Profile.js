import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Auth from "../utils/auth";
import americanTraditional from "../image/tattooIdeas/American Traditional/2.jpg";
import blackGrey from "../image/tattooIdeas/Black & Grey/4.jpg";
import realism from "../image/tattooIdeas/Realism/1.jpg";
import color from "../image/tattooIdeas/Color/0.jpg";
import color2 from '../image/tattooIdeas/Color/5.jpg'
import realism2 from '../image/tattooIdeas/Realism/3.jpg'

const Profile = (props) => {
  // const test = useQuery(QUERY_USER);
  const { loading, data } = useQuery(QUERY_USER);
  // const user = data?.me || data?.username || {};

  console.log("data", data);

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!user?.username) {
  if (!Auth.loggedIn()) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <h1 className="context">Your Portfolio</h1>
      <div className="gallery-block container d-flex">
        <div className="row d-flex justify-content-around">
        <img className="gallery-images col-4" src={americanTraditional} alt="at" />
        <img className="gallery-images col-4" src={blackGrey} alt="bg" />
        <img className="gallery-images col-4" src={realism} alt="real" />
        <img className="gallery-images col-4" src={color} alt="color" />
        <img className="gallery-images col-4" src={color2} alt="color2" />
        <img className="gallery-images col-4" src={realism2} alt="realism" />
      </div>
      </div>
    </div>
  );
};

export default Profile;
