import Image from "next/image";

export default function Home() {
  return (
    <>
   <h2>Welcome User</h2>
   Hello, Web App!
   <Image src="/hello.png" width={70} height={70} />
    </>
  );
}
