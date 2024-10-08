<<<<<<< HEAD
import { database, storage } from "./firebase.js";
// as significa um apelido ou seja databaseRef é o apelido de ref que é uma função do firebase
import { set, ref as databaseRef, onValue, remove } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js"
import { ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js"

document.addEventListener('DOMContentLoaded', () => {
    // Declarando as variáveis
=======
import { database, storage } from "./firebase.js"
// as significa um apelido, ou seja, databaseRef é o apelido de ref
import { set, ref as databaseRef, onValue } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js"
import { ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js"

document.addEventListener('DOMContentLoaded', () => {
    //Declarando as variaveis 
>>>>>>> 52daf80f8d846a919cd89c83384adaa837b1677f
    const formPost = document.querySelector('.form-post')
    const tituloPost = document.querySelector('.titulo-post')
    const imagemPost = document.querySelector('.imagem-post')
    const mensagemPost = document.querySelector('.mensagem-post')
<<<<<<< HEAD
    const dataPublicacaoPost = document.querySelector('.data-publicacao-post')
    const autorPost = document.querySelector('.autor-post')
    const sendPost = document.querySelector('.send-post')
    const divConteudos = document.querySelector('.conteudos')
    const gerenciadorConteudos = document.querySelector('.gerenciador-conteudos')
    const postCategoria = document.querySelector('.post-categoria')
    const norte = document.querySelector('.norte')
    const nordeste = document.querySelector('.nordeste')
    const centroOeste = document.querySelector('.centro-oeste')
    const sudeste = document.querySelector('.sudeste')
    const sul = document.querySelector('.sul')
    


    const dadosPost = (postElement, post) => {
        postElement.innerHTML = `
        <h2 class="mt-5 fw-bold text-center text-success" >${post.titulo}</h2>
        <div class="decoration-bar" ></div>
        <img src="${post.imagemUrl}" alt="imagem de ${post.titulo}" class="img-blog my-5 img-fluid" />
        <p>${post.mensagem}</p>
        <p class="align-self-center mt-5" >Publicado em:${post.data} por ${post.autor}.</p>
        <hr/>
    `
    }

    const postsRef = databaseRef(database, `posts`)

    if (sendPost && tituloPost && mensagemPost && dataPublicacaoPost && autorPost && imagemPost && postCategoria) {
        // Grava as informações
        const enviarPost = (postId, titulo, mensagem, data, autor, imagemUrl, categoria) => {
=======
    const dataPublicacaoPost = document.querySelector('.data-cadastro-post')
    const autorPost = document.querySelector('.autor-post')
    const sendPost = document.querySelector('.send-post')
    const divConteudos = document.querySelector('.conteudos')

    const postsRef = databaseRef(database, 'posts')

    if (sendPost && tituloPost && mensagemPost && dataPublicacaoPost && autorPost && imagemPost) {
        // Grava as informações
        const enviarPost = (postId, titulo, mensagem, data, autor, imagemUrl) => {
>>>>>>> 52daf80f8d846a919cd89c83384adaa837b1677f
            return set(databaseRef(database, `posts/${postId}`), {
                titulo,
                mensagem,
                data,
                autor,
<<<<<<< HEAD
                imagemUrl,
                categoria

            })
        }

        //Envia os dados gravados
        sendPost.addEventListener('click', () => {
            const postId = new Date().getTime().toString() // Um identificador baseado em milisegundos
=======
                imagemUrl
                // titulo:titulo,
                // mensagem:mensagem,
                // data:data,
                // autor:autor,
                // imagemUrl: imagemUrl
            })
        }

        // Recebe os valores da const enviarPost para envia-los ao clicar no botão    
        sendPost.addEventListener('click', () => {
            const postId = new Date().getTime().toString() //identificador baseado em ações de milisegundos
>>>>>>> 52daf80f8d846a919cd89c83384adaa837b1677f
            const titulo = tituloPost.value
            const mensagem = mensagemPost.value
            const data = dataPublicacaoPost.value
            const autor = autorPost.value
            const imagem = imagemPost.files[0]
<<<<<<< HEAD
            const categoria = postCategoria.value

            if (imagem) {
                const imagemRef = storageRef(storage, `posts/${postId}/${imagem.name}`)
                uploadBytes(imagemRef, imagem)
                    .then((snapshot) => {
                        getDownloadURL(snapshot.ref)
                            .then((url) => {
                                enviarPost(postId, titulo, mensagem, data, autor, url, categoria)
                                    .then(() => {
                                        tituloPost.value = ''
                                        mensagemPost.value = ''
                                        dataPublicacaoPost.value = ''
                                        autorPost.value = ''
                                        imagemPost.value = ''
                                        postCategoria.value = ''
                                    })
                                    .catch((error) => {
                                        console.log(error)
                                    })
                            })
                    })
            }

        })
    }

    const listarPosts = (conteudos, categoria) => {
        onValue(postsRef, (snapshot) => {
            const posts = snapshot.val()
            if (conteudos) {
                conteudos.innerHTML = ''
            }

            if (posts) {
                const postsIds = Object.keys(posts).sort((a, b) => b - a)
                postsIds.forEach((postId) => {
                    const post = posts[postId]
                    const postElement = document.createElement('div')
                    if (categoria === 'geral' || post.categoria === categoria) {
                        dadosPost(postElement, post)


                    }

                    if (conteudos) {
                        divConteudos.appendChild(postElement)
                    }

                })
            }else {
                if (conteudos) {
                    divConteudos.innerHTML = '<p class="mt-5">Nenhum post encontrado.</p>'
                }


            }
        })
    }
    const gerenciarPosts = (conteudos) => {
        onValue(postsRef, (snapshot) => {
            const posts = snapshot.val()
            conteudos.innerHTML = ''
            if (posts) {
                const postIds = Object.keys(posts).sort((a, b) => b - a)
                postIds.forEach((postId) => {
                    const post = posts[postId]
                    const postElement = document.createElement('div')
                    postElement.innerHTML = `
                        <button class="btn btn-danger btn-sm mx-3 mb-3 delete-post" data-id="${postId}"><i class="bi bi-trash3"></i></button>
                        <span class="fw-bold h6" >${post.titulo}</span>
                        <hr>
                    `
                    conteudos.appendChild(postElement)
                })
                document.querySelectorAll('.delete-post').forEach((button) => {
                    button.addEventListener('click', (e) => {
                        const postId = e.target.getAttribute('data-id')
                        apagarPost(postId)

                    })
                }
                )
            } else {
                conteudos.innerHTML = '<p class="mt-5"> Nenhum post encontrado.<p/>'
            }
        })
    }

    const apagarPost = (postId) => {
        remove(databaseRef(database, `posts/${postId}`))
            .then(() => {
                alert('Post removido com sucesso!')
                listarPosts(divConteudos)
                gerenciarPosts(gerenciadorConteudos)
                console.log(postId)
            })
            .catch((error) => {
                console.log(`Erro ao tentatar publicar o post: ${error}.`)
                alert('Erro ao tentar removor o post')
            })
    }


    if (divConteudos) {
        listarPosts(divConteudos, 'geral')
    }
    if(norte){
        listarPosts(norte, 'norte')
    }
    if(nordeste){
        listarPosts(nordeste, 'nordeste')
    }
    if(centroOeste){
        listarPosts(centroOeste, 'centro-oeste')
    }
    if(sudeste){
        listarPosts(sudeste, 'sudeste')
    }
    if(sul){
        listarPosts(sul, 'sul')
    }
    if (gerenciadorConteudos){
        gerenciarPosts(gerenciadorConteudos)

    }

=======

        if(imagem) {
            const imagemRef = storageRef(storage, `posts/${postId}/${imagem.name}`)
            uploadBytes(imagemRef, imagem)
                .then((snapshot) => {
                    getDownloadURL(snapshot.ref)
                        .then((url) => {
                            enviarPost(postId, titulo, mensagem, data, autor, url)
                                .then(() => {
                                    tituloPost.value = ''
                                    mensagemPost.value = ''
                                    dataPublicacaoPost.value = ''
                                    autorPost.value = ''
                                    imagemPost.value = ''
                                }).catch((error) => {
                                    console.log(error)
                                })
                        })
                })
        }
        })

    }

    const listarPosts = (conteudos) => {
        onValue(postsRef,(snapshot)=>{
           const posts = snapshot.val()
           divConteudos.innerHTML = ''
           if(posts){
            const postsIds = Object.keys(posts)
            postsIds.forEach((postId) => {
                const post = posts [postId]
                const postElement = document.createElement('div')
                postElement.innerHTML = `
                <h2 class="mt-5 fw-bold text-center text-success">${post.titulo}</h2>
                <div class="decoration-bar"></div>`
                divConteudos.appendChild(postElement)
            })
           }else{
            divConteudos.innerHTML='<p class="mt-5 fw-bold text-center text-success">Nenhum post foi encontrado.</p>'
        }
        })

    }
listarPosts()
>>>>>>> 52daf80f8d846a919cd89c83384adaa837b1677f

})