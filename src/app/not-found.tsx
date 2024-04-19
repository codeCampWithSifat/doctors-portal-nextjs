import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find the route</p>
      <button className="btn">
        <Link href="/">Return Home</Link>
      </button>
    </div>
  );
}
