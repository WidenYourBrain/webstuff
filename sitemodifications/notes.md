# I should host the css on a repo then reference that

const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://your-site.com/spin.css";
document.head.appendChild(link);
