import { Links } from "react-router";

export default function Footer() {
  return (
    <>
      <footer>
        <nav>
          <Link to="home">Home</Link>
          <Link to="posts">See gigs</Link>
          <Link to="form">Submit new gig</Link>
        </nav>
      </footer>
    </>
  );
}
