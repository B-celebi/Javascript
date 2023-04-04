const commentArea = document.querySelector("#comment-center");
let newImg = "https://api.lorem.space/image/game?w=40&h=40";
fetch("https://jsonplaceholder.typicode.com/comments?postId=25").then(
    response => response.json()).then(
        responses => {
            responses.forEach(a => {
                const randomNum = Math.floor(Math.random() * 500);
                const imageUrl = `https://picsum.photos/id/${randomNum}/40`;
                const div = `<div class="comment mt-4 text-justify float-left">
                <img src="${imageUrl}" alt="" class="rounded-circle" width="40" height="40">
                <h4>${a.email.slice(0, a.email.indexOf(".") < a.email.indexOf("@") ? a.email.indexOf(".") : a.email.indexOf("@"))}</h4>
                <span>- 20 October, 2018</span>
                <br>
                <p>${a.body}</p>
            </div>`;
                commentArea.innerHTML += div;
            });
        }
    ).catch(err => console.log(err));