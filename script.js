var active = 3;
const button = document.querySelectorAll('.button');
const right = document.querySelectorAll('.right h2');
const rightText = document.querySelectorAll('.right p');

  gsap.to(button[active-1], {
    opacity: 1,
    duration: 1,
    ease: Expo.easeInOut,
  })

  gsap.to(right[active-1], {
    opacity: 1,
  })
  gsap.to(rightText[active-1], {
    opacity: 1,
  })

  button.forEach(function(val , index) {
    val.addEventListener('click', function(){
      gsap.to("#curcle", {
        rotate: (active - (index + 1)) * 10,
      })

      uncheck();

      gsap.to(right[index], {
        opacity: 1,
        duration: 1,
        ease: Expo.easeInOut,
      })
      gsap.to(rightText[index], {
        opacity: 1,
        duration: 1,
        ease: Expo.easeInOut,
      })

      gsap.to(this, {
        opacity: 1,
      })
    });
  })

  function uncheck(){
    gsap.to(button,{
      opacity: .10,
    })

    gsap.to(right,{
      opacity: .2,
    })
    gsap.to(rightText,{
      opacity: .1,
    })
  }



  gsap.to('#curcle', {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 1,
  })