document.getElementById('add-broder').addEventListener('click', function () {
  const containar = document.getElementById('friend-containar');
  containar.style.border = '3px solid red';
});

function addBackground() {
  const backgrounds = document.getElementsByClassName('friend');
  for (const background of backgrounds) {
    background.style.backgroundColor = 'lightblue';
  }
}

document.getElementById('add-friend').addEventListener('click', function () {
  const containar = document.getElementById('friend-containar');
  const friendDiv = document.createElement('div');
  friendDiv.classList.add('friend');
  friendDiv.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Cumque autem architecto recusandae id!</p>
  `;
  containar.appendChild(friendDiv);

  console.log(friendDiv);
});
