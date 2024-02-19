// localStorage.clear();
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("new-comment");

  function getComments() {
    let comments = localStorage.getItem("comments");
    return comments ? JSON.parse(comments) : [];
  }

  function saveComments(comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
  }


  function displayComments() {
    const comments = getComments()
    const commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = "";
    comments.forEach(comment => {
      console.log(comment);
      const p = document.createElement('p');
      p.textContent = comment.text
      commentsDiv.appendChild(p)
    })
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const commentText = document.getElementById("comment-text").value;
    let comments = getComments();
    comments.push({ text: commentText });
    saveComments(comments);
    console.log(comments);
    document.getElementById('comment-text').value = "";
    displayComments();
    const clearBtn = document.getElementById('clear')
    console.log(clearBtn); 
  
  
    clearBtn.addEventListener("click",function(e){
      e.preventDefault();
      localStorage.clear();
      const comment = document.getElementById('comments');
      const html = `<h2>comments</h2>`
      comment.innerHTML = html;
    })
  });
  displayComments()
});
