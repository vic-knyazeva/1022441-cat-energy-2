var e=document.querySelector(".navigation"),s=document.querySelector(".header__toggle"),a=document.querySelector(".header__wrapper"),o=document.querySelector(".products");e.classList.remove("navigation--nojs");s.classList.remove("header__toggle--nojs");a.classList.remove("header__wrapper--nojs");o!==null&&o.classList.remove("products--nojs");e!==null&&s!==null?s.addEventListener("click",()=>{e.classList.contains("navigation--opened")?(e.classList.remove("navigation--opened"),e.classList.add("navigation--closed"),s.classList.remove("header__toggle--close"),s.classList.add("header__toggle--open")):(e.classList.remove("navigation--closed"),e.classList.add("navigation--opened"),s.classList.remove("header__toggle--open"),s.classList.add("header__toggle--close"))}):console.error("required class not found");
