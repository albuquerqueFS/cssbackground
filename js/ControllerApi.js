const link = 'https://api.github.com/users/albuquerqueFS/repos';
const divRepos = document.getElementById('sobre-projetos');

fetch(link, {
    method: 'get'
})
    .then((res) => {
        res.json()
            .then((result) => {
                result.forEach(element => {
                    const repo = document.createElement('div');
                    const titulo = document.createElement('h1');
                    const descricao = document.createElement('p');

                    titulo.innerHTML = element.name;
                    titulo.setAttribute('href', element.html_url);
                    titulo.className = 'card__titulo';

                    descricao.innerHTML = element.description;
                    descricao.className = 'card__descricao';

                    repo.className = 'projeto-card'
                    repo.appendChild(titulo);
                    repo.appendChild(descricao);

                    divRepos.append(repo);
                });;
            })
    })
    .catch((err) => {
        console.log(err);
    })