var memorySmall=document.getElementById('memorySmall')
memorySmall.addEventListener('click',function () {
    var xtraMemory=document.getElementById('xtraMemory').innerText
    document.getElementById('xtraMemory').innerText=0

    total()
})

var memoryBig=document.getElementById('memoryBig')
memoryBig.addEventListener('click',function () {
    var xtraMemory=document.getElementById('xtraMemory').innerText
    document.getElementById('xtraMemory').innerText=180

    total()    
})


document.getElementById('smallStorage').addEventListener('click',function () {
    var xtraStorage=document.getElementById('xtraStorage').innerText
    document.getElementById('xtraStorage').innerText=0

    total()
})

document.getElementById('mediumStorage').addEventListener('click',function () {
    var xtraStorage=document.getElementById('xtraStorage').innerText
    document.getElementById('xtraStorage').innerText=150

    total()
})

document.getElementById('bigStorage').addEventListener('click',function () {
    var xtraStorage=document.getElementById('xtraStorage').innerText
    document.getElementById('xtraStorage').innerText=200

    total()
})

document.getElementById('freeDelivery').addEventListener('click',function () {
    var xtraStorage=document.getElementById('deliveryCharge').innerText
    document.getElementById('deliveryCharge').innerText=0

    total()
})

document.getElementById('paidDelivery').addEventListener('click',function () {
    var xtraStorage=document.getElementById('deliveryCharge').innerText
    document.getElementById('deliveryCharge').innerText=20

    total()
})

function total() {
    var bestPrice=document.getElementById('bestPrice').innerText
    var bestPriceNum=parseFloat(bestPrice)
    
    var xtraMemory=document.getElementById('xtraMemory').innerText
    var xtraMemoryNum=parseFloat(xtraMemory)
    
    var xtraStorage=document.getElementById('xtraStorage').innerText
    var xtraStorageNum=parseFloat(xtraStorage)

    var deliveryCharge=document.getElementById('deliveryCharge').innerText
    var deliveryChargeNum=parseFloat(deliveryCharge)

    var totalPrice=bestPriceNum+xtraMemoryNum+xtraStorageNum+deliveryChargeNum

    document.getElementById('totalPrice').innerText=totalPrice

    

    
}

var apply=document.getElementById('apply')
apply.addEventListener('click',function () {
    var promo=document.getElementById('promo').value
    var total=document.getElementById('totalPrice').innerText
    var totalNum=parseFloat(total)

    // console.log(totalNum)
    if(promo=='off'){
        // console.log('sdfaf')
        var off=totalNum*0.8
        console.log(off)
        document.getElementById('totalPrice').innerText=off
        promo=""
    }
    
})








