# 07- Using static resources

- add image which is hello.png
in public folder
/public/hello.png

- app/paage.js

```js
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

```