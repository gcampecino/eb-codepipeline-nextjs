import Image from "next/image";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_API_URL)
  return (<div>Home{process.env.NEXT_PUBLIC_API_URL}</div>);
}
