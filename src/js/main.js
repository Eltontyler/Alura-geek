window.onload = function() {
    var overlay = document.getElementById('overlay');
    var closeBtn = document.getElementById('closeBtn');

    // Exibe o overlay ao carregar a página
    overlay.style.display = 'flex';

    // Adiciona um evento de clique no botão de fechar
    closeBtn.onclick = function() {
        overlay.style.display = 'none';
    };
};


let products = [
    {
        id: 0,
        image: "https://cdn.awsli.com.br/2500x2500/184/184312/produto/240402530/luffy-gear-5--1--5ihadk726b.jpg",
        product: "D. Luffy Gear 5",
        price: 100.00,
    },
    {
        id: 1,
        image: "https://www.nerdloja.com/cdn/shop/products/S8726a353feec4b83bd790f9b3d06531ey_800x.jpg?v=1693293986",
        product: "Itachi Uchiha",
        price: 150.00,
    },
    {
        id: 2,
        image: "https://a-static.mlcdn.com.br/450x450/boneco-naruto-shippuden-naruto-uzumaki-hokage-hasbro/alphajogos/6655narutohokage/892827407292479aec3b14b1311a9173.jpeg",
        product: "Naruto Uzumaki",
        price: 80.0,
    },
    {
        id: 3,
        image: "https://http2.mlstatic.com/D_NQ_NP_808532-CBT71892867057_092023-O.webp",
        product: "Majin Vegeta",
        price: 200.0,
    },
    {
        id: 4,
        image: "https://images-americanas.b2w.io/produtos/4734831621/imagens/boneco-dragon-ball-z-goku-super-sayajin-maximatic-bandai/4734831621_1_large.jpg",
        product: "Goku",
        price: 200.0,
    },
    {
        id: 5,
        image: "https://http2.mlstatic.com/D_NQ_NP_961942-MLB42288555936_062020-O.webp",
        product: "Katsuki Bakugo",
        price: 100.0,
    },
];

// Função para mostrar um novo produto

function readProducts() {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${product.image}" alt="Imagem do produto">
            <div class="card-container--info">
                <p>${product.product}</p>
                <div class="card-container--price">
                    <p>R$ ${product.price.toFixed(2)}</p>
                    <img class="trash" src="./src/images/trash.png" alt="Ícone do Lixo" onclick="deleteProduct(${product.id})">
                    <img class="edit" src="./src/images/pen.png" alt="Ícone de Edição" onclick="updateProduct(${product.id})">
                </div>
            </div>
        `;
        cards.appendChild(card);
    });
}

// Função para criar um novo produto
function createProduct() {
    const form = document.getElementById("form-product");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const price = parseFloat(document.getElementById("price").value);
        const image = document.getElementById("image").value;
        if (name && price && image) {
            const newProduct = {
                id: products.length,
                image,
                product: name,
                price,
            };
            products.push(newProduct);
            readProducts();
            form.reset();
        } else {
            alert("Preencha todos os campos!");
        }
    });
}

// Função para deletar um produto
function deleteProduct(id) {
    if (confirm("Tem certeza que deseja excluir o produto?")) {
        products = products.filter((product) => product.id !== id);
        readProducts();
        if (products.length === 0) {
            alert("Nenhum produto encontrado!");
        }
    }
}

// Função para atualizar um produto
function updateProduct(id) {
    const product = products.find((product) => product.id === id);
    if (product) {
        const name = prompt("Novo nome do produto:", product.product);
        const price = parseFloat(prompt("Novo valor do produto:", product.price));
        const image = prompt("Nova imagem do produto:", product.image);
        if (name && price && image) {
            product.product = name;
            product.price = price;
            product.image = image;
            readProducts();
            alert("Produto atualizado com sucesso!");
        } else {
            alert("Preencha todos os campos!");
        }
    } else {
        alert("Produto não encontrado!");
    }
}

// Inicializar a leitura dos produtos
readProducts();

// Inicializar a criação de produtos
createProduct();
