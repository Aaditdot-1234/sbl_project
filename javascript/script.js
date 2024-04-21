function BoxShadow(element) {
    element.classList.add('boxshd');
    element.style.boxShadow = '10px 0px 5px rgba(0, 0, 0, 0.5)'; 
} 
 
function RemoveBoxShadow(element) {
    element.classList.remove('boxshd');
    element.style.boxShadow = '';    
}
     
function ResizeSpan() {
    var cover = document.querySelector(".cover");  
    var cover2 = document.querySelector(".cover2");
    var span = document.getElementById("span1");
    var yOffset = window.scrollY || window.pageYOffset;
    var opacity = yOffset / window.innerHeight; 

    // Ensure opacity doesn't exceed 1
    opacity = Math.min(opacity*2.5, 1);

    // Adjust the background color and opacity of the span
    span.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
    span.style.opacity = opacity;

    // Make the span sticky until opacity reaches 1
    if (opacity < 1) { 
        cover.style.position="sticky";
        // Reset margin top to 500px if opacity is less than 1  
    } else { 
        // Change margin top to 20px if opacity reaches 1
        cover2.style.marginTop = '20px';
    }
} 

function visit() {
    window.location.href = "main.html";
}

const observer = new IntersectionObserver((entries) =>{ 
    entries.forEach((entry) => {
        console.log(entry); 
        if(entry.isIntersecting)
        {
            entry.target.classList.add("show");
        }
        else 
        {
            entry.target.classList.remove("show");
        }
    });
}); 
const hidden_elements = document.querySelectorAll('.hidden'); 
hidden_elements.forEach((el) => observer.observe(el));  
 
// showcase 
 
let backgroundimage1 = document.querySelector('.backgroundimage1');
let backgroundimage2 = document.querySelector('.backgroundimage2');
let backgroundimage3 = document.querySelector('.backgroundimage3');
let backgroundimage4 = document.querySelector('.backgroundimage4');
let mask1 = document.querySelector('.mask1'); 
let mask2 = document.querySelector('.mask2'); 
let mask3 = document.querySelector('.mask3'); 
let mask4 = document.querySelector('.mask4'); 
addEventListener('scroll', function()
{  
    let offset = window.scrollY;   
    backgroundimage1.style.backgroundPositionY = offset*0.5 + 'px';
    backgroundimage2.style.backgroundPositionY = offset*0.5 + 'px';
    backgroundimage3.style.backgroundPositionY = offset*0.5 + 'px';
    backgroundimage4.style.backgroundPositionY = offset*0.5 + 'px';
    mask1.style.backgroundPositionY =offset*0.5 + 'px'; 
    mask2.style.backgroundPositionY =offset*0.5 + 'px'; 
    mask3.style.backgroundPositionY =offset*0.5 + 'px'; 
    mask4.style.backgroundPositionY =offset*0.5 + 'px'; 
});  
 
const observeinfo1 = new IntersectionObserver((entries) =>{ 
    entries.forEach((entry) => {
        console.log(entry); 
        if(entry.isIntersecting)
        {
            entry.target.classList.add("showinfo");
        }
        else 
        {
            entry.target.classList.remove("showinfo");
        }
    });
});
const hiddeninfo1 = document.querySelectorAll('.hiddeninfo1');
hiddeninfo1.forEach((el) => observeinfo1.observe(el));  

const observeinfo2 = new IntersectionObserver((entries) =>{ 
    entries.forEach((entry) => {
        console.log(entry); 
        if(entry.isIntersecting)
        {
            entry.target.classList.add("showinfo");
        }
        else 
        {
            entry.target.classList.remove("showinfo");
        }
    });
});  
const hiddeninfo2 = document.querySelectorAll('.hiddeninfo2') 
hiddeninfo2.forEach((el) => observeinfo2.observe(el));  

const tetris_animate = new IntersectionObserver((entries) =>{ 
    entries.forEach((entry) => {
        console.log(entry); 
        if(entry.isIntersecting)
        {
            entry.target.classList.add("showinfo");
        }
        else 
        {
            entry.target.classList.remove("showinfo");
        }
    });
});
const hidden_info1 = document.querySelectorAll('.image1');
hidden_info1.forEach((el) => tetris_animate.observe(el));  

const tetris_animate2 = new IntersectionObserver((entries) =>{ 
    entries.forEach((entry) => {
        console.log(entry); 
        if(entry.isIntersecting)
        {
            entry.target.classList.add("showinfo");
        }
        else 
        {
            entry.target.classList.remove("showinfo");
        }
    });
});
const hidden_info2 = document.querySelectorAll('.image2');
hidden_info2.forEach((el) => tetris_animate2.observe(el));  

const tetris_animate3 = new IntersectionObserver((entries) =>{ 
    entries.forEach((entry) => {
        console.log(entry); 
        if(entry.isIntersecting)
        {
            entry.target.classList.add("showinfo");
        }
        else 
        {
            entry.target.classList.remove("showinfo");
        }
    });
});
const hidden_info3 = document.querySelectorAll('.image3');
hidden_info3.forEach((el) => tetris_animate.observe(el));  

const tetris_animate4 = new IntersectionObserver((entries) =>{ 
    entries.forEach((entry) => {
        console.log(entry); 
        if(entry.isIntersecting)
        {
            entry.target.classList.add("showinfo");
        }
        else 
        {
            entry.target.classList.remove("showinfo");
        }
    });
});
const hidden_info4 = document.querySelectorAll('.image4');
hidden_info4.forEach((el) => tetris_animate.observe(el));   