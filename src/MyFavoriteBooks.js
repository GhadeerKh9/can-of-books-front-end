import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import "./BestBooks.css";
import { withAuth0 } from "@auth0/auth0-react";

import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import ModalForm from "./component/ModalForm";
// import UpdateDataForm from "./component/UpdateDataForm";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],

      server: process.env.REACT_APP_URL,
      title: "",
      description: "",
      status: "",
      idx: -1,

      show: false,
    };
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;

    axios
      .get(`${this.state.server}/books?email=${user.email}`)
      .then((results) => {
        this.setState({
          booksData: results.data,
          showBooks: true,
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };

  handleSubmitting = (event) => {
    event.preventDefault();

    const newObject = {
      email: this.props.auth0.user.email,
      title: event.target.titleF.value,
      description: event.target.descriptionF.value,
      status: event.target.statusF.value,
    };

    axios
      .post(`${this.state.server}/addBook`, newObject)
      .then((results) => {
        this.setState({
          booksData: results.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  showModal = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleDeleteBook = (index) => {
    const { user } = this.props.auth0;
    const data = {
      email: user.email,
    };
    axios
      .delete(`${this.state.server}/books/${index}`, { params: data })
      .then((result) => {
        this.setState({
          booksData: result.data,
        });
      })
      .catch((error) => alert(error));
  };

  // updateModal = (index) => {
  //   this.setState({
  //     show: true,
  //     title: this.state.booksData[index].title,
  //     description: this.state.booksData[index].description,
  //     status: this.state.booksData[index].status,
  //     idx: index,
  //   });
  // };

  // updateValues = (e) => {
  //   e.preventDefault();
  //   const { user } = this.props.auth0;
  //   const updatedData = {
  //     email: user.email,
  //     title: e.target.title.value,
  //     description: e.target.description.value,
  //     status: e.target.status.value,
  //   };
  //   axios
  //     .put(`${this.state.server}/updateBook/${this.state.idx}`, updatedData)
  //     .then((result) => {
  //       // console.log(result.data);
  //       this.setState({
  //         books: result.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  render() {
    return (
      <>
        <div>
          <ModalForm
            show={this.state.show}
            handleClose={this.handleClose}
            handleSubmittingForm={this.handleSubmitting}
          />
        </div>

        <Carousel>
          {this.state.booksData &&
            this.state.booksData.map((item, idx) => {
              return (
                <Carousel.Item interval={10000}>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1000x300.png/363533?text=Books+Poster+Place+Holder"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.status}</p>
                    <Button
                      variant="outline-dark"
                      onClick={this.showModal}
                      size="lg"
                      block
                    >
                      Add a book!
                    </Button>
                    <div key={idx}>
                      <button onClick={() => this.handleDeleteBook(idx)}>
                        Delete
                      </button>
                      <button onClick={() => this.updateModal(idx)}>
                        Update Book Info
                      </button>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
        </Carousel>
        <div>
          {/* <UpdateDataForm
            show={this.state.show}
            title={this.state.title}
            description={this.state.description}
            status={this.state.status}
            updateValues={this.updateValues}
            handleClose={this.handleClose}
            booksData={this.state.booksData}
          /> */}
        </div>
      </>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
