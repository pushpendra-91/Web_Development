const testimonial = [
    {
        name: "Annmarie W.",
        photourl: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        text: "Facebook has really helped our business. Just what I was looking for. If you want real marketing that works and effective implementation - Facebook's got you covered. I love your system"
    },
    {
        name: "Elvis",
        photourl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        text: "Thanks to facebook, we've just launched our 5th website! Thank you for making it painless, pleasant and most of all hassle free! I would be lost without facebook. Facebook should be nominated for service of the year."
    },
    {
        name: "Lou N",
        photourl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text: "Facebook is the next killer app. I like facebook more and more each day because it makes my life a lot easier. You've saved our business!"
    },
    {
        name: "Scott G",
        photourl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        text: "Facebook is great. Just what I was looking for. We've used facebook for the last five years. You won't regret it."
    },
];

const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const userNameE1 = document.querySelector(".username");

let indx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photourl, text } = testimonial[indx];
    imgE1.src = photourl;
    textE1.innerText = text;
    userNameE1.innerText = name;
    indx++;
    if (indx === testimonial.length) {
        indx = 0;
    }
    setTimeout(() => {
        updateTestimonial()
    }, 10000)
}