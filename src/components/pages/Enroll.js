import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CourseHeaderSection from "../sections/CourseHeaderSection";
import EnrollForm from "../sections/EnrollForm";

class Enroll extends Component {
  state = {
    name: "",
    featured_image: "",
    price: ""
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(` http://devcent.test/api/courses/${id}`);
    const course = res.data;
    this.setState({
      name: course.name,
      featured_image: course.featured_image,
      price: course.price
    });
  }

  render() {
    const { name, featured_image, price } = this.state;
    return (
      <React.Fragment>
        <CourseHeaderSection image={featured_image} title={name} />
        <div className="container my-2">
          <Link to="/courses" className="text-lg hover:text-red-600">
            {" "}
            go back
          </Link>
          <EnrollForm price={price} />
        </div>
      </React.Fragment>
    );
  }
}

export default Enroll;
