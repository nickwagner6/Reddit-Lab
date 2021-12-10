const body = document.querySelector("body");

//1. Use JavaScript to request data from the https://www.reddit.com/r/aww/.json API.
const promise = fetch("https://www.reddit.com/r/aww/.json").then((res) =>
  res.json()
);
promise.then((data) => {
  for (let i = 0; i < data.data.children.length; i++) {
    //2. Display the results on the page.
    const newDiv = document.createElement("div");
    const newTitle = document.createElement("h3");
    const newImage = document.createElement("img");
    const newLink = document.createElement("a");

    // const name = data.data.children[i].data.name;
    const title = data.data.children[i].data.title;
    const link = data.data.children[i].data.url;
    const image = data.data.children[i].data.thumbnail;

    newTitle.innerHTML = title;
    newImage.src = image;
    newLink.href = link;
    newLink.innerText = link;

    body.appendChild(newTitle);
    body.appendChild(newImage);
    body.appendChild(newLink);
  }
});

//3. At a minimum, include a title, an image and a working link for each post. (Easiest is to use the thumbnail for the image, but there are other images in the JSON response.)
//4. Make it look good with some CSS.
