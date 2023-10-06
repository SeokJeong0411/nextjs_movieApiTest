import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>What are you doing here?</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
