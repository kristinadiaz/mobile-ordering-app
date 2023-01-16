import { bookArray } from "./data.js";
const orderFeed = document.getElementById('order-feed')

function orderFeedHtml() {
    let feedHtml = ``
    bookArray.forEach(function(order) {
        feedHtml += `
        <div class="order">
            <div class="order-inner">
                <span class="order-pic">${order.emoji}</span>
                <div>
                    <p class="order-title">${order.title}</p>
                    <p class="order-author">${order.author}</p>
                    <div class="order-details">
                        <span class="order-detail">
                        $${order.price}
                        </span>
                        <span class="order-detail">
                        ${order.genres}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    return feedHtml
}

function render() {
    document.getElementById('order-feed').innerHTML = orderFeedHtml();
}

render();