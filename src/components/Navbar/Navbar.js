import { Navbar, Nav, DropdownButton, DropdownItem, Avatar } from 'emerald-ui';

function component(props) {
  const { handleClickOption } = props;
  return (
    <Navbar breakAt="sm">
      <Navbar.Brand>
        <h2>My To-Do App</h2>
      </Navbar.Brand>
      <Nav grow collapsible>
        <a
          href="/"
          onClick={() => {
            handleClickOption('main');
          }}
        >
          My tasks
        </a>
        <a
          href="/archived"
          onClick={() => {
            handleClickOption('archived');
          }}
        >
          Archived tasks
        </a>
      </Nav>
      <Nav collapsible>
        <DropdownButton color="warning" title={<Avatar title="KP" />}>
          <DropdownItem eventKey="1">My account</DropdownItem>
          <DropdownItem separator />
          <DropdownItem eventKey="2">Sign out</DropdownItem>
        </DropdownButton>
      </Nav>
    </Navbar>
  );
}
export default component;
