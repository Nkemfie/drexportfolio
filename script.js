const galleryWrapper = document.getElementById('gallery-wrapper')
const imgItems = galleryWrapper.querySelectorAll('.gallery-item')
const previewModal = document.getElementById('preview')
const nextPreview = document.querySelector('.next-btn')
const prevPreview = document.querySelector('.previous-btn')

const showPreviewModal = () => {
    var img = galleryWrapper.querySelector('.gallery-item[data-is-Preview="true"] img').src
    previewModal.querySelector('#preview-img img').src = img
    if(!previewModal.classList.contains('show'))
        previewModal.classList.add('show');
}

const closePreviewModal = () => {
    if(galleryWrapper.querySelector('.gallery-item[data-is-Preview="true"]') != null){
        galleryWrapper.querySelector('.gallery-item[data-is-Preview="true"]').dataset.isPreview = 'false'
    }
    if(previewModal.classList.contains('show'))
        previewModal.classList.remove('show');
}
const nextItem = () => {
    var currentItem = galleryWrapper.querySelector('.gallery-item[data-is-Preview="true"]')
    if(currentItem.nextElementSibling != undefined)
        var nextItem = currentItem.nextElementSibling;
    else
        var nextItem = galleryWrapper.querySelectorAll('.gallery-item')[0]

        console.log(currentItem, nextItem)
    currentItem.dataset.isPreview = `false`
    nextItem.dataset.isPreview = `true`
    var img = galleryWrapper.querySelector('.gallery-item[data-is-Preview="true"] img').src
    previewModal.querySelector('#preview-img img').src = img
}
const prevItem = () => {
    var currentItem = galleryWrapper.querySelector('.gallery-item[data-is-Preview="true"]')
    if(currentItem.previousElementSibling != undefined)
        var prevItem = currentItem.previousElementSibling;
    else
        var prevItem = galleryWrapper.querySelectorAll('.gallery-item')[galleryWrapper.querySelectorAll('.gallery-item').length - 1]

        console.log(currentItem, prevItem)
    currentItem.dataset.isPreview = `false`
    prevItem.dataset.isPreview = `true`
    var img = galleryWrapper.querySelector('.gallery-item[data-is-Preview="true"] img').src
    previewModal.querySelector('#preview-img img').src = img
}
previewModal.querySelector('.preview-close').addEventListener('click', e=>{
    e.preventDefault()
    closePreviewModal()
})
nextPreview.addEventListener('click', e => {
    e.preventDefault()
    nextItem()
})
prevPreview.addEventListener('click', e => {
    e.preventDefault()
    prevItem()
})

imgItems.forEach(el=>{
    var img = el.querySelector('img')
    var tmpImg = document.createElement('img')
    tmpImg.src = img.src
    var height = tmpImg.naturalHeight
    var width = tmpImg.naturalWidth
    if(height > width){
        el.dataset.display = `portrait`
    }else if(width > height){
        el.dataset.display = `landscape`
    }else{
        el.dataset.display = `landscape`
    }
    el.addEventListener('click' , e=> {
        e.preventDefault()
        el.dataset.isPreview = 'true'
        showPreviewModal()
    })
})
galleryWrapper.style.display = `grid`
