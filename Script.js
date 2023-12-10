// JavaScript source code
/*const like_btn_element = document.getElementsByClassName('like_btn');

like_btn_element.onclick = function () {
    if (like_btn_element.style.color == 'white') {
        like_btn_element.style.color = 'lightcoral';
        like_btn_element.style.background = 'pink';
    }
    else {
        like_btn_element.style.color = 'white';
        like_btn_element.style.background = 'transparent';
    }
}*/
const likeBtn = document.querySelector('.heart_svg');
const numberOfLikesElement = document.querySelector('.number-of-likes');

let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);
let isLiked = false;

const likeClick = () => {
    if (!isLiked) {
        likeBtn.classList.add('isLiked');
        numberOfLikes++;
        numberOfLikesElement.textContent = numberOfLikes;
        likeBtn.style.stroke = 'red';
        likeBtn.style.fill = 'red';

        isLiked = !isLiked;
    } else {
        likeBtn.classList.remove('isLiked');
        numberOfLikes--;
        numberOfLikesElement.textContent = numberOfLikes;
        isLiked = !isLiked;
        likeBtn.style.stroke = 'lightcoral';
        likeBtn.style.fill = 'lightcoral';
    }
};

likeBtn.addEventListener('click', likeClick);