import { Button, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      style={{ height: "50vh" }}
      className="container m-auto d-flex justify-content-center align-items-center"
    >
      <Button variant="dark">
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
};

export default Loader;
