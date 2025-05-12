const sections = document.querySelectorAll("section");
const navBar = document.getElementById("navbar__list");
const commentForm = document.getElementById("comment-form");
const user = document.getElementById("name");
const email = document.getElementById("email");
const text = document.getElementById("comment");
const submittedComments = document.getElementById("comments-list");
const commentVerifier = document.getElementById("no-comments");
const storedComments = JSON.parse(localStorage.getItem("comments"));

const navList = [
    { name: "Section 1", id: "section1" },
    { name: "Section 2", id: "section2" },
    { name: "Section 3", id: "section3" },
    { name: "Section 4", id: "section4" },
    { name: "Section 5", id: "section5" },
    { name: "Comments", id: "comments" },
    { name: "User's Comments", id: "submitted__comments" }
];

const commentList = [];

navList.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item.name;
    a.href = `#${item.id}`;
    a.classList.add("menu__link");
    li.appendChild(a);
    navBar.appendChild(li);
});

function setActiveSection() {
    window.addEventListener("scroll", () => {
        let activeSection = null;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= -100 && rect.top < window.innerHeight / 2) {
                activeSection = section;
            }

            sections.forEach(sec => sec.classList.remove("active"));

            if (activeSection) {
                activeSection.classList.add("active");
            }
        });
    });
}

document.querySelectorAll("#navbar__list a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetID = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetID);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
        setTimeout(() => {
            sections.forEach(sec => sec.classList.remove("active"));
            targetElement.classList.add("active");
        }, 300);
    });
});

function addComment() {
    const obj = {
        name: user.value,
        email: email.value,
        text: text.value,
        id: Date.now()
    };
    user.value = "";
    email.value = "";
    text.value = "";
    commentVerifier.innerHTML = "";

    commentList.push(obj);

    localStorage.setItem("comments", JSON.stringify(commentList));

    displayComments(commentList);
}

function displayComments(parameter) {
    submittedComments.innerHTML = "";
    parameter.forEach(
        (re) =>
        (submittedComments.innerHTML += `
        <li>
            <div class="comment">
                <h3>Name: ${re.name}</h3>
                <p>Email: ${re.email}</p>
                <p>Comment: ${re.text}</p>
            </div>
        </li>
    `)
    );
}

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (user.value === "") {
        alert("Please enter your name");
        return;
    }

    if (email.value === "" && !email.value.includes("@")) {
        alert("Please enter a valid email adress (e.g., example@domain.com)");
        return;
    }

    if (text.value === "") {
        alert("Please enter a comment");
        return;
    }

    addComment();
    displayComments(commentList);
});

if (storedComments) {
    storedComments.forEach(comment => {
        commentList.push(comment);
    });
    displayComments(commentList);
} else {
    commentVerifier.innerHTML = `<h3>No comments yet</h3>`;
}

setActiveSection();