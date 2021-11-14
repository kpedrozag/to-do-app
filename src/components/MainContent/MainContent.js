import React from 'react';
import { Card, Modal } from 'emerald-ui';
import './MainContent.css';

const tasks = [
  {
    title: 'Task1',
    description:
      'This my task 1. This my task 1. This my task 1. This my task 1. This my task 1. This my task 1. This my task 1. '
  },
  {
    title: 'Task2',
    description: 'This my task 2'
  }
];

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  render() {
    const { index, title, description } = this.props;
    return (
      <React.Fragment>
        <Card className="task" key={index} onClick={this.open}>
          <div className="task-title">
            <h3>{title}</h3>
          </div>
          <div className="task-description">
            <p>{description}</p>
          </div>
        </Card>
        <Modal
          centered
          hideOnOutsideClick
          show={this.state.showModal}
          onHide={this.close}
        >
          <Modal.Header closeButton={true}>
            <Modal.Title>
              <h1>{title}</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Description</h2>
            <p>{description}</p>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

function component() {
  const renderedTaks = tasks.map((task, index) => (
    <Task {...task} index={index} />
  ));
  return (
    <div className="main-content-container">
      <Card className="tasks input-tasks">
        <Card.Header color="warning">
          <h1>Input</h1>
        </Card.Header>
        <div className="tasks-container">{renderedTaks}</div>
      </Card>
      <Card className="tasks progress-tasks">
        <Card.Header>
          <h1>In-Progress</h1>
        </Card.Header>
        <div className="tasks-container">{renderedTaks}</div>
      </Card>
      <Card className="tasks done-tasks">
        <Card.Header color="success">
          <h1>Done</h1>
        </Card.Header>
        <div className="tasks-container">{renderedTaks}</div>
      </Card>
    </div>
  );
}
export default component;
