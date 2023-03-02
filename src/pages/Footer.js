import Link from "next/link";

export default function Footer() {
  return (
    <div className="md:w-96 mx-auto text-blue-500 text-normalize my-16">
      <Link href="/tos" className="mx-2 my-4">
        Terms of Service
      </Link>
      <Link href="/privacy" className="mx-2 my-4">
        Privacy Policy
      </Link>
      <Link href="/dmca" className="mx-2 my-4">
        DMCA Policy
      </Link>
    </div>
  );
}
