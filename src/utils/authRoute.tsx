import React from "react";
import SignIn from "../pages/SignIn/SignIn";

const authRoute = (props) => {
  window.addEventListener("storage", (e) => {
    if (e.key === "signedIn") {
      window.location.reload();
    }
  });

  return localStorage.getItem("signedIn") === "true" ? props : <SignIn />;
};

export { authRoute };
