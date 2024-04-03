# Routing
http://a.com/dashbord/analytics/
      domain , segment, segment
                path

- One of the most important concepts in web frameworks is routing.

  Here's the address. a.com here is called a domain name.
And the part called dashboard analytics is called path in English.
And each element that makes up the path is called a segment.

Routing means that certain content is grouped in a certain way according to that path.
Deciding what to show is called routing.
  Now let's take a look at next.js routing.
The most basic rule is: Now we connected without a pass behind us.
Now, what I'm saying is that you came to the homepage. Now, at this time, NeXT js looks for page.js under the app folder.


The final result created by combining the page.js return value with the children of layout.js
HTML will be responded.

  Now, this time, let's click create here. Now, create is included after the pass.

  A 404 error occurred because we had not taken any action on the page yet.

As for how to respond to content, here is Pass Create.

Now, we create a folder called create under the app. And the promised name is page.js.

## dynamic routing
- 4:50
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
