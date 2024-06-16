# Widget npm package

- This is iFrame widget package to create widget of custum size and property.
- Get you webSite bot Reponse in your Telegram and Answer Them.


<img src="https://github.com/ravisingh9302/assets/blob/main/img/Screenshot1.png" alt="screenshot" height="200px"> <img src="https://github.com/ravisingh9302/assets/blob/main/img/Screenshot2.png" alt="screenshot" height="200px">


## Follow my another Repositry [Widget CDN repo](https://github.com/ravisingh9302/widget) to use this Widget as through CDN link.




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

- GET  YOUR TelechatbotId at [@telewidget_bot](https://t.me/telewidget_bot)

```
 <Widget TelechatbotId="1379160926" config={options}/>
```
- One move prop is availabe to show any web site inside a Iframe widget.
- when you use webserver prop  don't need to pass TelechatbotId just pass random integer in it.
```
 <Widget TelechatbotId="1379160926" config={options} webserver="https://www.google.com/"/>
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

