fetch("https://api.github.com/users?per_page=100&page=1")
  .then((res) => res.json())
  .then((res) => {
    document.querySelector("#displayResponse").innerText = JSON.stringify(
      res,
      null,
      2
    );
  });
