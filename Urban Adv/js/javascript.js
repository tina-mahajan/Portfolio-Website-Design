document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page refresh
  const cName = document.getElementById("c_name").value;
  const cNumber = document.getElementById("c_number").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const message = document.getElementById("message").value;
  let errorMessages = '';
  let namePattern = /^[A-Za-z\s]+$/;
  if (!namePattern.test(cName)) {
    errorMessages += "Please enter a valid name (only letters and spaces allowed).<br>";
  }
  let phonePattern = /^\d{10}$/;
  if (!phonePattern.test(cNumber)) {
    errorMessages += "Please enter a valid phone number (10 digits).<br>";
  }
  if (errorMessages) {
    document.getElementById('errorMessages').innerHTML = errorMessages;
  } else {
    document.getElementById('errorMessages').innerHTML = "Form submitted successfully!";
    const alertMessage = `
    Contact Name: ${cName}
    Contact Number: ${cNumber}
    Email: ${email}
    Address: ${address}
    Message: ${message}`;
    alert(alertMessage);
    document.getElementById("contactForm").reset();
  }
});

//Animation for moving line
var initialpath=`M 10 100 Q 250 100 1400 100`
var finalpath=`M 10 100 Q 250 100 1400 100`
var string = document.querySelector("#string");
string.addEventListener("mousemove", function(dets) {
   path= `M 10 100 Q 250 ${dets.y} 1400 100`
   gsap.to("svg path",{
    attr:{d:path},
    duration:0.3,
    ease:"power3.out"
   })
})
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:0.8,
        ease:"elastic.out(1,0.2)"
    })
})


//Animation for cursor
gsap.registerPlugin(ScrollTrigger);
const cursor=document.querySelector("#cursor");
var nav = gsap.timeline();
document.body.addEventListener("mousemove",(dets)=>{
  gsap.to(cursor,{
      x:dets.x,
      y:dets.y,
      duration:1,
      ease:"back.out",
     
  })
})
// Animation for navbar
nav
  .from("#nav", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5,
  })
  .from("#subparts h5", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
  });
  document.addEventListener("DOMContentLoaded", function () {
    const urbanLogo = document.querySelector("#urban-logo");
    const text = urbanLogo.textContent;
    urbanLogo.innerHTML = text.split("").map(char => `<span>${char}</span>`).join("");
    gsap.timeline({ repeat: -1, repeatDelay: 1 })
      .to("#urban-logo span", {
        scale: 1.5,
        opacity: 1,
        translateY: 0,
        rotation: 360,
        color: "white",
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })
      .to("#urban-logo span", {
        scale: 1,
        rotation: 0,
        color: "#white",
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.in",
      });
  });

// Animation for Welcome text
document.addEventListener("DOMContentLoaded", function () {
  function wrapTextWithSpans(selector) {
    const element = document.querySelector(selector);
    const text = element.textContent;
    element.innerHTML = text.split("").map(char => {
      return `<span class="letter">${char}</span>`;
    }).join("");
  }
  wrapTextWithSpans("#urban");
  wrapTextWithSpans("#advertisings");
  gsap.from("#image_h1", {
    y: 500,
    opacity: 0,
    duration: 2.5,
  });
  gsap.from(".btn-container", {
    y: 300,
    opacity: 0,
    duration: 2.5,
  });
  const timeline = gsap.timeline({ repeat: -1 }); 
  timeline
    .to("#urban .letter", {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: "power2.out",
    })
    .to("#advertisings .letter", {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: "power2.out",
    }, "+=0.3")
    .to("#urban .letter", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0,
      ease: "power2.in",
    }, "+=0")
    .to("#advertisings .letter", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0,
      ease: "power2.in",
    });
});


// Animation for Welcome text
var tl=gsap.timeline({
  scrollTrigger:{
    trigger:"#welcome_text",
    scroller:"body",
    // markers:true,
    start:"top 80%",
    end:"top 20%",
    scrub:1
  }
})
tl.from("#p", {
  y: 10,
  opacity: 0,
  duration: 1,
});
tl.from("hr.short", {
  width: 0,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

tl.from("#circle", {
  y: 30,
  opacity: 0,
  duration: 1,
});

// Animation for Design Chapters.
var timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#design_chapters",
    scroller: "body",
    // markers: true,
    start: "top 70%", 
    end: "top 30%",
    scrub: 1,
  },
});

timeline.from("#DC", {
  y: 10,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
});

timeline.from("hr.shortd", {
  width: 0,
  opacity: 0,
  duration:1,
  ease: "power2.out"
});

timeline.from(".card.left1", {
  x: "-100vw",
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
}, "anim1").to(".card.left1", { x: "0", opacity: 1, duration: 1.5 });

timeline.from(".card.right1", {
  x: "100vw",
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
}, "anim1").to(".card.right1", { x: "0", opacity: 1, duration: 1.5 });

timeline.from(".card.left2", {
  x: "-100vw",
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
}, "anim2").to(".card.left2", { x: "0", opacity: 1, duration: 1.5 });

timeline.from(".card.right2", {
  x: "100vw",
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
}, "anim2").to(".card.right2", { x: "0", opacity: 1, duration: 1.5 });

timeline.from(".card.left3", {
  x: "-100vw",
  opacity: 0,
  duration: 1.5,
  ease: "power2.out", 
}, "anim3").to(".card.left3", { x: "0", opacity: 1, duration: 1.5 });

timeline.from(".card.right3", {
  x: "100vw", 
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
}, "anim3").to(".card.right3", { x: "0", opacity: 1, duration: 0.5 });

 //Animation for the About us section
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#About_us",   
    scroller: "body",            
    start: "top 60%",       
    end: "top 10%",         
    scrub: 10,              
  }
});
tl2.from(".h1", {
  y: 30,
  opacity: 0,
  duration: 1,
});
tl2.from("hr.short_About", {
  width: 0,
  opacity: 0,
  duration:1,
  ease: "power2.out"
});
tl2.from("#h1_p", {
  y: 30,
  opacity: 0,
  duration: 1,
});


tl2.from(".card_1",{
  x:-80,
  opacity:0,
  duration:1
});
tl2.from(".card_2",{
  y:-80,
  opacity:0,
  duration:0.5
});
tl2.from(".card_3",{
  x:80,
  opacity:0,
  duration:0.5

});

//Animation for our services
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#services",
    scroller: "body",
   //markers: true,
    start: "top 50%",
    end: "top 20%",
    scrub: 1
  }
});

tl3.from(".serv", {
  y: 10,
  opacity: 0,
  duration: 1
});
tl3.from("hr.short2", {
  width: 0,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out"
});

tl3.from("#ser_p", {
  y: 10,
  opacity: 0,
  duration: 0.5
});
var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".container1",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 20%",
    scrub: 2
  }
});

tl6.from(".logo", {
  x: -200,
  opacity: 0,
  duration: 2.5, 
  delay: 0.5
}, 0)

.from(".branding", {
  x: 200,
  opacity: 0,
  duration: 2.5,
}, "+=0.5") 

.from(".banner", {
  x: -200,
  opacity: 0,
  duration: 3.5, 
}, "+=0.2") 

.from(".social", {
  x: 200,
  opacity: 0,
  duration: 3.5, 
}, "+=0.5"); 

//Animation for Why Choose us
var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#wcu",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
    scrub: 1
  }
});

tl4.from(".heading", {
  y: 10,
  opacity: 0,
  duration: 1
});
tl4.from("hr.shortw", {
  width: 0,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out"
});
tl4.from(".wcu_card",{
  y:800,
  opacity:0,
  duration:5.5
});

//Animation for contact us form
var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact_us",
    scroller: "body",
   //markers: true,
    start: "top 80%",
    end: "top 20%",
    scrub: 1
  }
});
tl5.from(".form-section",{
  x:-300,
  opacity:0,
  duration:2
});
tl5.from(".map-section",{
  x:300,
  opacity:0,
  duration:2.5
})