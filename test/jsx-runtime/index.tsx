import { Doctype, render, unsafe } from "../..";

const Button = ({ text }: { text: string }) => <button>{text}</button>;

console.log(
  render(
    <>
      <Doctype />
      <html lang="en">
        <head>
          <title>Hello World</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body>
          <h1>Hello world!</h1>
          {unsafe("<p>Hello world!</p>")}
          <Button text="Awesome!"/>
        </body>
      </html>
    </>
  )
);
