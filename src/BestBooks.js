import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Jumbotron from "react-bootstrap/Jumbotron";
import "./BestBooks.css";
import { withAuth0 } from "@auth0/auth0-react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
// import Carousel from "react-bootstrap/Carousel";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      // userEmail= '',
      showBooks: false,
    };
  }




  componentDidMount = () => {
const { user, isAuthenticated } = this.props.auth0;
    if (isAuthenticated) {
      const url = `${process.env.REACT_APP_URL}/books`;
      const paramObj = {
        params: {
          email: user.email,
        },
      };
      axios
        .get(url, paramObj)
        .then((outputs) => {
          this.setState({
            books: outputs.data,

            showBooks: true,
          });
          console.log(outputs)
        })
      

        .catch((err) => {
          console.log(err);
        });
      

  }
}

  render() {
    return (
      <Carousel>
        {this.state.books &&
          this.state.books.map((item) => {
            return (
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/1000x300.png/363533?text=Books+Poster+Place+Holder"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
    );
  }
  }

export default withAuth0(MyFavoriteBooks);
