const shareBtn = document.getElementById('share');
document.querySelector('.bottomShare').classList.add('hide')

shareBtn.addEventListener('click', e => {
    document.querySelector('.bottomShare').classList.remove('hide')
})