let body = document.body;

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#userBtn').onclick = () =>{
    profile.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.header .flex .search-form');

document.querySelector('#SearchBtn').onclick = () =>{
    searchForm.classList.toggle('active');
    profile.classList.remove('active');
}
let side_bar = document.querySelector('.sideBar');
document.querySelector('#menuBtn').onclick = ()=>{
    side_bar.classList.toggle('active');
    body.classList.toggle('active');
}

document.querySelector('.sideBar #close-btn').onclick = ()=>{
    side_bar.classList.add('active');
    body.classList.add('active');
}
window.scroll = () =>{
    profile.classList.remove('active');
    searchForm.classList.remove('active');

    if(window.innerWidth < 1200){
        side_bar.classList.remove('active');
        body.classList.remove('active');
        
    }

}

let toggleBtn = document.querySelector('#toggleBtn');
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
    toggleBtn.classList.replace('fa-sun' , 'fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode' , 'enabled');
}

const disableDarkMode = () =>{
    toggleBtn.classList.replace('fa-moon' , 'fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode' , 'disabled');
}

if(darkMode === 'enabled'){
    enableDarkMode();
}

toggleBtn.onclick = (e) =>{
    let darkMode = localStorage.getItem('dark-mode');
    if(darkMode === 'disabled'){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
}