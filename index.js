const products = [
    ['🍎', 100, 3],
    ['🍇', 42, 9],
    ['🍋', 7, 5],
    ['🍓', 253, 1],
];

const countTotalPrice = () => {
    let totalPrice = 0;
    products.forEach(product => {
        totalPrice += product.length != 0 ? Number(product[1]) * Number(product[2]) : 0;
    });
    return totalPrice;
}

const countTotalQuantity = () => {
    let totalProducts = 0;
    products.forEach(product => {
        totalProducts += product.length != 0 ? Number(product[2]) : 0;
    });
    return totalProducts;
}

const clear = () => {
    products.length = 0;
}

const add = (product, price, quantity) => products.push([product, price, quantity]);

const remove = (productName) => {
    for (let i = 0; i < products.length; i++){
        if (products[i].includes(productName)) {
            products[i].length = 0;
        }
    }
}

const increaseQuantity = (productName) => {
    for (let i = 0; i < products.length; i++){
        if (products[i].includes(productName)) {
            products[i][2]++;
        }
    }
}

const decreaseQuantity = (productName) => {
    for (let i = 0; i < products.length; i++){
        if (products[i].includes(productName)) {
            products[i][2]--;
        }
    }
}

const getItems = () => {
    let logArr = '';
    products.forEach(product => {
        if (product != '') {
            logArr += `Продукт: ${product[0]}, \n`;
            logArr += `Ціна: ${product[1]} кредитів, \n`;
            logArr += `Кількість: ${product[2]} штук; \n\n`;
        }
    });
    console.log(`Ви маєте у своїй корзині такі товари: \n\n${logArr}Сумарна ціна всіх товарів: ${countTotalPrice()} кредитів, кількість ${countTotalQuantity()} штук.`);
}

getItems();
clear();
add('apple', '25', '45');
add('banana', '47', '12');
add('strawberry', '255', '9');
remove('strawberry');
increaseQuantity('apple');
decreaseQuantity('banana');
increaseQuantity('cherry');
getItems();
