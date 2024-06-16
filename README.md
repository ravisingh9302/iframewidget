# Widget npm package

- This is iFrame widget package to create widget of custum size and property.
<p ><img src="https://github.com/ravisingh9302/iframewidget/blob/main/img/screenshot1.png" alt="" height="250px"></p>
<p ><img src="https://github.com/ravisingh9302/iframewidget/blob/main/img/screenshot2.png" alt="" height="250px"></p>

## Follow step to use this in your your next or react app.

- Install npm package.

```
npm i iframewidget

```

- Import it in your page.

```
 import { Widget } from "iframewidget"

```

- Use below tag to create a widegt get in your page
- use below in those pages in which you want a widget bot.

- GET  YOUR TelechatbotId at [@telewidget_bot](t.me/telewidget_bot)

```
 <Widget TelechatbotId="1379160926" config={options}/>
```

- These are the available default options to customize you widget.
```
  let options = {
    Closebtncolor: "#ffffff",
    Height: "480px",
    Width: "360px",
    chatIconRight: '50px',
    chatIconBottom: '50px',
    chatIconbgColor: "#121D9E",
    chatIconcolor: '#ffffff',

    title: 'Customer Support',
    introMessage: 'Hello! How can we help you?',
    visitorPronoun: 'You',
    chatareabgcolor: "#ffffff",
    titlecolor: "#ffffff",
    titlebgcolor: "#121D9E",
    placeholderText: 'Type your message...',
    autoResponse: 'Looking for the available customer executive.',
  }
```

- After all you page.js  looks like

```
import { Widget } from "iframewidget"

export default function Home() {
  let options = {
    Closebtncolor: "#ffffff",
    Height: "480px",
    Width: "360px",
    chatIconRight: '50px',
    chatIconBottom: '50px',
    chatIconbgColor: "#121D9E",
    chatIconcolor: '#ffffff',

    title: 'Customer Support',
    introMessage: 'Hello! How can we help you?',
    visitorPronoun: 'You',
    chatareabgcolor: "#ffffff",
    titlecolor: "#ffffff",
    titlebgcolor: "#121D9E",
    placeholderText: 'Type your message...',
    autoResponse: 'Looking for the available customer executive.',
  }

  return (
    <>
    <div>
     <Widget TelechatbotId="1379160926" config={options}/>

    <!-- your code here -->
    </div>


    </>)
}

```
