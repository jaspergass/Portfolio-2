
//paste
Vue.component('vue-gallery', {
    props: ['photos'],
    data: function () {
      return {
        activePhoto: null
      }
    },
    template: `
      <div class="vueGallery">
      <div class="activePhoto" :style="'background-image: url('+photos[activePhoto]+');'">
        <button type="button" aria-label="Previous Photo" class="previous" @click="previousPhoto()">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button type="button" aria-label="Next Photo" class="next" @click="nextPhoto()">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <div class="thumbnails">
        <div
             v-for="(photo, index) in photos"
             :src="photo"
             :key="index"
             @click="activePhoto = index"
             :class="{'active': activePhoto == index}" :style="'background-image: url('+photo+')'">
        </div>
      </div>
    </div>`,
    mounted () {
      this.activePhoto = 0
      document.addEventListener("keydown", (event) => {
        if (event.which == 37)
          this.previousPhoto()
        if (event.which == 39)
          this.nextPhoto()
      })
    },
    methods: {
      nextPhoto () {
        this.activePhoto = ( this.activePhoto+1 < this.photos.length ? this.activePhoto+1 : 0 )
      },
      previousPhoto () {
        this.activePhoto = ( this.activePhoto-1 >= 0 ? this.activePhoto-1 : this.photos.length-1 )
      }
    }
  })
  
  new Vue({
    el: '#app',
    data: {
      fogphotos: [
        '../img/gallery/fog/fog1.jpg',
        '../img/gallery/fog/fog2.jpg',
        '../img/gallery/fog/fog3.jpg',
        '../img/gallery/fog/fog4.jpg',
        '../img/gallery/fog/fog5.jpg'
      ],
      bugphotos: [
        '../img/gallery/insects/gallery1-1x.jpg',
        '../img/gallery/insects/gallery2-1x.jpg',
        '../img/gallery/insects/gallery3-1x.jpg',
        '../img/gallery/insects/gallery4-1x.jpg',
        '../img/gallery/insects/gallery5-1x.jpg',
        '../img/gallery/insects/gallery6-1x.jpg'
      ],
     
      bwphotos: [
        '../img/gallery/bw/bw1.jpg',
        '../img/gallery/bw/bw2.jpg',
        '../img/gallery/bw/bw3.jpg',
        '../img/gallery/bw/bw4.jpg',
        '../img/gallery/bw/bw5.jpg',
        '../img/gallery/bw/bw6.jpg'
      ],
      homephotos: [
        '../img/gallery/home/home1.jpg',
        '../img/gallery/home/home2.jpg',
        '../img/gallery/home/home3.jpg',
        '../img/gallery/home/home4.jpg',
        '../img/gallery/home/home5.jpg',
        '../img/gallery/home/home6.jpg',
        '../img/gallery/home/home7.jpg',
        '../img/gallery/home/home8.jpg',
        '../img/gallery/home/home9.jpg',
        '../img/gallery/home/home10.jpg'
      ],
      snowphotos: [
        '../img/gallery/snow/snow1.jpg',
        '../img/gallery/snow/snow2.jpg',
        '../img/gallery/snow/snow3.jpg',
        '../img/gallery/snow/snow4.jpg',
        '../img/gallery/snow/snow5.jpg',
      ]
    }
  });
  
  
  
  
  function setPhotos(n){
    var gallery1 = document.getElementById("gallery1");
    var gallery2 = document.getElementById("gallery2");
    var gallery3 = document.getElementById("gallery3");
    var gallery4 = document.getElementById("gallery4");
    var gallery5 = document.getElementById("gallery5");
    if(n==1){
      gallery1.style.display ="block";
      gallery2.style.display ="none";
      gallery3.style.display ="none";
      gallery4.style.display ="none";
      gallery5.style.display ="none";
    }else if(n==2){
      gallery1.style.display ="none";
      gallery2.style.display ="block";
      gallery3.style.display ="none";
      gallery4.style.display ="none";
      gallery5.style.display ="none";
    }else if(n==3){
      gallery1.style.display ="none";
      gallery2.style.display ="none";
      gallery3.style.display ="block";
      gallery4.style.display ="none";
      gallery5.style.display ="none";
    }else if(n==4){
      gallery1.style.display ="none";
      gallery2.style.display ="none";
      gallery3.style.display ="none";
      gallery4.style.display ="block";
      gallery5.style.display ="none";
    }else if(n==5){
      gallery1.style.display ="none";
      gallery2.style.display ="none";
      gallery3.style.display ="none";
      gallery4.style.display ="none";
      gallery5.style.display ="block";
    }
  }
  
  
  