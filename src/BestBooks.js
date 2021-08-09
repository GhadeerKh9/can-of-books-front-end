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
      userEmail= ""
      showBooks: false,
    };
  }

  gettingOutputs = () => {
    const { user, isAuthenticated } = this.props.auth0;
    isAuthenticated &&
      axios
        .get(`${process.env.REACT_APP_URL}/books?email=email`, {
          params: { name: user.name },
        })
        .then((outputs) => {
          this.setState({
            books: outputs.data,

            showBooks: true,
          });
        })

        .catch((err) => {
          console.log(err);
        });

    // console.log(books);
  };

  render() {
    return (
      <Carousel>
        {this.state.books &&
          this.state.books.map((item) => {
            return (
              <Carousel.Item interval={1000}>
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>{item.status}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
