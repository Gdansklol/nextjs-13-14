# Next.js 13(14) 

## Development environment setting process / Install
```bash
npx create-next-app@latest .
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<hr/>

## dynamic routing

Now, let's consider a somewhat more complicated situation. Now here is the html

If you click, the path will be

It's read/1. Now, the read here doesn't matter, but /1 is a bit troublesome.

Why do I know what the right number is over there?

You can not. Yes read/1 may come

read/100 million could come.


- we are that all pages can be created in advance

There isn't one. So dynamically

I have to create content.

It's called dynamic routing. Now here

Because the route is the first route lead

We create a read folder under the app folder.
- app/read/[id]/page.js

```js


export default function Read(props) {
    return(
        <>
        <h2>Read</h2>
        read/parameters number:{props.params.id}
        </>
    )
}
```