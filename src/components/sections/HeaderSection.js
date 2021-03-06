import React, { Component } from "react";

import { Link } from "react-router-dom";
import headerImage from "../../images/headerImage.png";
import Button from "../Button";

import LargeScreenHeader from "./LargeScreenHeader";

class HeaderSection extends Component {
  state = {
    width: window.innerWidth
  };

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width < 768;
    if (isMobile) {
      return (
        <React.Fragment>
          <div
            style={{
              background: `linear-gradient(rgba(20, 20, 20, .5),rgba(20, 20, 20, .5)),url(${headerImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "auto"
            }}
            className="rounded-b-large bg-no-repeat bg-cover"
          >
            {" "}
            <div className="pt-20 container mx-auto py-2 flex-col justify-between items-center">
              <div className="tracking-tight text-white p-4 ">
                <h1 className="text-3xl font-extrabold">- better education</h1>
                <h2 className="text-3xl -mt-3 font-normal">
                  for a better world
                </h2>
                <p className="text-sm font-normal leading-1">
                  Learn new skills and develop yourselve in the ever growing
                  tech world.
                </p>
                <div className="my-4 border-b-2 md:mr-64" />
                <div className="mb-3">
                  <h3 className="font-bold">upcoming events:</h3>
                  <h1>Summer Camp Training School</h1>
                </div>
                <Link to="/courses">
                  <Button name="Enroll Now" />
                </Link>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return <LargeScreenHeader />;
    }
  }
}

export default HeaderSection;
