document.addEventListener("DOMContentLoaded", () => {
      // Dynamically load comments
      const commentsContainer = document.getElementById("comments-container");
      const comments = [
    "This is such a great series!",
    "I can't wait for the next episode!",
  ];

      function loadComments() {
        commentsContainer.innerHTML = "";
        comments.forEach((comment) => {
              const p = document.createElement("p");
              p.textContent = comment;
              commentsContainer.append