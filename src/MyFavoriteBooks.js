import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import "./BestBooks.css";
import { withAuth0 } from "@auth0/auth0-react";

import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Form from "./component/Form";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      server: process.env.REACT_APP_URL,
      // userEmail= '',
      showBooks: false,
      show: false,
      bookName: "",
      description: "",
    };
  }

  // getBooks = () => {
  //   const { user } = this.props.auth0;

  //   const url = `${process.env.REACT_APP_URL}/books`;
  //   const paramObj = {
  //     params: {
  //       email: user.email,
  //     },
  //   };
  //   axios
  //     .get(url, paramObj)
  //     .then((outputs) => {
  //       this.setState({
  //         books: outputs.data,

  //         showBooks: true,
  //       });
  //       console.log(outputs);
  //     })

  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  componentDidMount = async () => {
    const books = await axios.get(`${this.state.server}/books`, {
      params: { email: this.props.auth0.user.email },
    });
    console.log("books", books.data);
    this.setState({
      books: books.data,
      showBooks: true,
    });
  };

  updateBookName = (event) => {
    this.setState({
      bookName: event.target.value,
    });
  };

  updateDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  addBook = async (event) => {
    event.preventDefault();
    const formObject = {
      bookName: this.state.bookName,
      description: this.state.description,
      ownerEmail: this.props.auth0.user.email,
    };
    const newBooks = await axios.post(
      `${this.state.server}/addBook`,
      formObject
    );

    this.setState({
      books: newBooks.data,
    });
  };

  showModal = () => {
    this.setState({
      show: true,
    });
  };

  handleClose1 = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <>
        <div>
          <Button
            variant="outline-dark"
            onClick={this.showModal}
            size="lg"
            block
          >
            Add a book!
          </Button>
          {this.state.show && (
            <Form
              updateBookNameProps={this.updateBookName}
              updateBookDescriptionProps={this.updateDescription}
              addBookProps={this.addBook}
              handleClose1={this.handleClose1}
              show={this.state.show}
            />
          )}
        </div>
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
      </>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
