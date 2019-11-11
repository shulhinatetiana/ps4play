const offerImages = document.querySelectorAll('.offer__photo')

offerImages.forEach((offer) => {
  offer.addEventListener('click', () => {
    offer.nextElementSibling
      .classList.toggle('offer__photo__inside--active')
  })
})

const slider = tns({
  "container": ".slider",
  "items": 1,
  "speed": 300,
  "controls": false,
  "autoplayButtonOutput": false,
  "nav": false,
  "autoplay": true,
  "autowidth": true,
  "autoplayHoverPause": true,
  "autoplayTimeout": 4000,
  "swipeAngle": false
})