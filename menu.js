let DATA
function GetData() {
    fetch('https://raw.githubusercontent.com/zahid022/json/main/starbucks')
        .then(res => res.json())
        .then(data => DATA = data)
        .then(() => Show())
}
GetData()

const categoryList = document.getElementById('category-list')
const categoryContainer = document.getElementById('category-container')

function Show() {
    let kod = []
    DATA.map((item, i) => {
        kod = item.children
        categoryList.innerHTML += `
                                <h2 class="text-[24px] mb-3 font-semibold">
                                    ${item.name}
                                </h2>
                                <ul class="cat-list mb-4"></ul>
                                 `
        categoryContainer ? categoryContainer.innerHTML += `
                                        <div>
                                            <h2 class="text-[28px] mb-6 font-bold">${item.name}</h2>
                                            <div class="flex cat-contains flex-wrap py-10 border-t"></div>
                                        </div>
                                        ` : ''
        const catlist = document.querySelectorAll('.cat-list')
        const catContains = document.querySelectorAll('.cat-contains')
        kod.map(item => {
            if (item.children.length) {
                item.img = item.children[0].products[0].assets.masterImage.uri
            }else if (item.products) {
                item.img = item.products[0].assets.masterImage.uri
            }
            
            catlist[i].innerHTML += `<li class="text-[20px] font-normal mb-2 text-[#6B6B6B]"><a target="_blank" href="products.html?name=${item.name}">${item.name}</a></li>`
            catContains[i] ?  catContains[i].innerHTML += `
                                    <div class="lg:size-6/12 size-full px-3 mb-8">
                                        <a target="_blank" href="products.html?name=${item.name}" class="flex cursor-pointer items-center">
                                            <div class="mr-3 rounded-full overflow-hidden">
                                                <img class="w-[120px]" src="${item.img}" />
                                            </div>
                                            <div>
                                                <p class="text-[24px] font-medium">${item.name}</p>
                                            </div>
                                        </a>
                                    </div>
                                     `  : ''
})})}