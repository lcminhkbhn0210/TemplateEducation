// thay doi mau thanh navbar khi cuon

function doi_mau_thanh_navbar(){
    window.addEventListener('scroll',() =>{
        document.querySelector('nav').classList.toggle
        ('window-scroll',window.scrollY > 0)
    })
}

// hien thi cau hoi

function hien_thi_cau_hoi(){
    const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click',() =>{
        faq.classList.toggle('open');

        const icon  = faq.querySelector('.faq_icon i');
        if(icon.className == 'uil uil-plus'){
            icon.className = "uil uil-minus"
        }
        else{
            icon.className = "uil uil-plus"
        }
    })
})
}

function hien_thi_menu(){
    const menu = document.querySelector(".nav_menu");
    const menuBtn = document.querySelector("#open-menu-btn");
    const closeBtn = document.querySelector("#close-menu-btn");

    menuBtn.addEventListener('click', ()=>{
        menu.style.display = "flex";
        closeBtn.style.display = "inline-block";
        menuBtn.style.display = "none"
    })

    closeBtn.addEventListener('click', ()=>{
        menu.style.display = "none";
        menuBtn.style.display = "inline-block";
        closeBtn.style.display = "none"
    })
}

hien_thi_menu()
doi_mau_thanh_navbar()
hien_thi_cau_hoi()