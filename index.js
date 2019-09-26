function showRepositories(){
  var repos = JSON.parse(this.responseText);
  console.log(repos);
}
function getRepositories(){
  const req = new XMLHttpRequest();
  req.addEventListener('load',showRepositories);
  req.open('GET','https://api.github.com/users/octocat/repos');
  req.send();
}
