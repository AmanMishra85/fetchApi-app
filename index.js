

document.getElementById("btn").addEventListener("click", () => {
    getData();
  });

function getData() {
  const uname = document.getElementById("usern").value;

  const userapi =  `https://api.github.com/users/${uname}`;

  fetch(userapi)
    .then((resp)=>{
        if(!resp.ok) throw new Error('Invalid');
        return resp.json()
    })
    .then((resp)=>{
        document.getElementById('uimg').src = resp.avatar_url;
        document.getElementById('un').innerHTML = `Name: ${resp.name}`;
        document.getElementById('ul').innerHTML = `Location: ${resp.location}`;
        document.getElementById('ufr').innerHTML = `Followers: ${resp.followers}`;
        document.getElementById('ufl').innerHTML = `Following: ${resp.following}`;
        document.getElementById('uja').innerHTML = `Created At: ${resp.created_at}`;
        document.getElementById('ulp').innerHTML = `Last Update: ${resp.updated_at}`;
        
    })
    .catch(console.log)
}
