(()=>{"use strict";var n,A={756:(n,A,e)=>{e.d(A,{Z:()=>p});var r=e(537),t=e.n(r),i=e(645),o=e.n(i),a=e(667),l=e.n(a),E=new URL(e(841),e.b),s=o()(t()),B=l()(E);s.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Helvetica;\n}\n\nbody {\n  background-color: #6B728E ;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: #000000;\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 2rem;\n  max-width: calc(100% - 80px);\n}\n\n.skip-link {\n  position: absolute;\n  top: -80px;\n  left: 0;\n  background-color: var(--btn);\n  color: white;\n  padding: 8px;\n  z-index: 10;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\nnav {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: rgba(255, 255, 255, 0.24) 0px 1px;\n  background-color: #404258;\n  position: sticky;\n  justify-content: space-between;\n  top: 0;\n  display: flex;\n  padding: 1.5rem 1.5rem;\n  align-items: center;\n  z-index: 1;\n}\n\n.buttonnav a {\n  color: #fff;\n  font-weight: 600;\n  font-size: 20px;\n  padding: 12px;\n}\n\n.nav__list {\n  display: flex;\n  align-items: center;\n}\n\n.nav__item {\n  margin: 0 12px;\n}\n\n.nav__link {\n  padding: 15px;\n  color: #eeeeee;\n  font-size: 0.9rem;\n  font-weight: 500;\n  max-width: 44px;\n  min-width: 44px;\n}\n\n.button__menu {\n  font-size: 24px;\n  color: #eeeeee;\n  display: none;\n}\n\n.button__menu img,\n.button__close img {\n  padding: 10px;\n  min-width: 24px;\n}\n\n.button__close {\n  display: none;\n}\n\n.title {\n  background-image: url("+B+");\n  background-size: cover;\n  background-position: center;\n  top: 0;\n  width: 100%;\n  min-height: 500px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: -99;\n}\n\n.title__apps{\n  color: #fff;\n  font-size: 4rem;\n  font-weight: 500;\n  text-shadow: -1px -1px 0 #404258, 1px -1px 0 #404258, -1px 1px 0 #404258;\n}\n\n.title__jargon {\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: 500;\n  text-shadow: -1px -1px 0 #404258, 1px -1px 0 #404258, -1px 1px 0 #404258;\n}\n\n#detail-restaurant {\n  max-width: 1200px;\n}\n\n#favorite-restaurant {\n  max-width: 1200px;\n}\n\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 2rem;\n}\n\n.rating {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n}\n\n.rating img {\n  margin-right: 8px;\n}\n\n.resto__image {\n  height: 250px;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n.resto__image img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  border-radius: 20px;\n}\n\n.katalog__resto {\n  transition: 0.3s;\n  box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 19px,\n    rgba(0, 0, 0, 0.09) 0px 10px 34px;\n  border-radius: 20px;\n  background-color: #474E68;\n  color: #fff;\n}\n\n.katalog__resto:hover {\n  box-shadow: 0 7px 23px 0 rgba(0, 0, 0, 0.44);\n  cursor: pointer;\n}\n\n.resto__city {\n  font-weight: 500;\n  font-size: 0.875rem;\n  position: absolute;\n  background-color: #2B3A55;\n  color: #fff;\n  padding: 7px;\n  font-size: 12px;\n  margin-left: 4px;\n  margin-top: 4px;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 3px;\n}\n\n.resto__content {\n  padding: 2rem;\n}\n\n.resto__name {\n  font-size: 1rem;\n  color: rgb(255, 255, 255);\n}\n\n.resto__description {\n  font-size: 0.875rem;\n  color: rgb(255, 255, 255);\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n}\n.truncate-review {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.detail {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  height: 100%;\n  margin-bottom: 2rem;\n}\n\n.detail__menu {\n  display: flex;\n}\n\n.detail__content {\n  width: 100%;\n}\n.img__detail {\n  margin-right: 2rem;\n  max-width: 800px;\n  height: 100%;\n}\n.img__detail img {\n  border-radius: 1rem;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  width: 100%;\n  /* object-fit: cover; */\n  height: 100%;\n}\n\n.detail__address {\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.detail__description {\n  font-size: 0.9375rem;\n  text-align: justify;\n  margin: 10px 0 10px 0;\n  color: rgb(0, 0, 0);\n}\n.category span {\n  padding: 6px;\n  color: rgb(0, 0, 0);\n  background-color: #50577A;\n  border-radius: 10px;\n}\n\n.menu {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.menu h2 {\n  font-size: 2rem;\n}\n.menu h4 {\n  font-size: 1.5rem;\n  color: rgb(0, 0, 0);\n}\n\n.item__menu {\n  font-weight: 300;\n  color: rgb(196, 196, 196);\n  line-height: 2;\n}\n\n.detail__menu {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-around;\n}\n\n.detail__food,\n.detail__drink {\n  background-color: #474E68;\n  padding: 20px 100px;\n  margin: 1rem;\n  border-radius: 20px;\n  height: 100%;\n}\n\n.title__review {\n  margin: 2rem 0 2rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.detail__review {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.detail__review__item {\n  display: flex;\n  padding: 20px;\n  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,\n    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;\n  border-radius: 20px;\n  margin: 10px;\n  width: 250px;\n  max-width: 300px;\n  height: 150px;\n  background-color: #50577A;\n}\n\n.review__name {\n  font-weight: 600;\n  color: rgb(0, 0, 0);\n}\n\n.review__date {\n  font-size: 0.812rem;\n  font-weight: 400;\n  color: rgb(255, 255, 255);\n}\n.review__body {\n  font-style: italic;\n  color: #fff;\n}\n.like {\n  font-size: 18px;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  background-color: #000000;\n  color: rgb(255, 0, 179);\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nfooter {\n  color: #fff;\n  background-color: #404258;\n  width: 100%;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.footer{\n  font-size: 14px;\n  color: white;\n}\n","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Helvetica;\n}\n\nbody {\n  background-color: #6B728E ;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n  color: #000000;\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 2rem;\n  max-width: calc(100% - 80px);\n}\n\n.skip-link {\n  position: absolute;\n  top: -80px;\n  left: 0;\n  background-color: var(--btn);\n  color: white;\n  padding: 8px;\n  z-index: 10;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\nnav {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: rgba(255, 255, 255, 0.24) 0px 1px;\n  background-color: #404258;\n  position: sticky;\n  justify-content: space-between;\n  top: 0;\n  display: flex;\n  padding: 1.5rem 1.5rem;\n  align-items: center;\n  z-index: 1;\n}\n\n.buttonnav a {\n  color: #fff;\n  font-weight: 600;\n  font-size: 20px;\n  padding: 12px;\n}\n\n.nav__list {\n  display: flex;\n  align-items: center;\n}\n\n.nav__item {\n  margin: 0 12px;\n}\n\n.nav__link {\n  padding: 15px;\n  color: #eeeeee;\n  font-size: 0.9rem;\n  font-weight: 500;\n  max-width: 44px;\n  min-width: 44px;\n}\n\n.button__menu {\n  font-size: 24px;\n  color: #eeeeee;\n  display: none;\n}\n\n.button__menu img,\n.button__close img {\n  padding: 10px;\n  min-width: 24px;\n}\n\n.button__close {\n  display: none;\n}\n\n.title {\n  background-image: url('../public/images/heros/hero-image_2.webp');\n  background-size: cover;\n  background-position: center;\n  top: 0;\n  width: 100%;\n  min-height: 500px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: -99;\n}\n\n.title__apps{\n  color: #fff;\n  font-size: 4rem;\n  font-weight: 500;\n  text-shadow: -1px -1px 0 #404258, 1px -1px 0 #404258, -1px 1px 0 #404258;\n}\n\n.title__jargon {\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: 500;\n  text-shadow: -1px -1px 0 #404258, 1px -1px 0 #404258, -1px 1px 0 #404258;\n}\n\n#detail-restaurant {\n  max-width: 1200px;\n}\n\n#favorite-restaurant {\n  max-width: 1200px;\n}\n\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 2rem;\n}\n\n.rating {\n  display: flex;\n  align-items: center;\n  margin-bottom: 6px;\n}\n\n.rating img {\n  margin-right: 8px;\n}\n\n.resto__image {\n  height: 250px;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n.resto__image img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  border-radius: 20px;\n}\n\n.katalog__resto {\n  transition: 0.3s;\n  box-shadow: rgba(0, 0, 0, 0.09) 0px 6px 19px,\n    rgba(0, 0, 0, 0.09) 0px 10px 34px;\n  border-radius: 20px;\n  background-color: #474E68;\n  color: #fff;\n}\n\n.katalog__resto:hover {\n  box-shadow: 0 7px 23px 0 rgba(0, 0, 0, 0.44);\n  cursor: pointer;\n}\n\n.resto__city {\n  font-weight: 500;\n  font-size: 0.875rem;\n  position: absolute;\n  background-color: #2B3A55;\n  color: #fff;\n  padding: 7px;\n  font-size: 12px;\n  margin-left: 4px;\n  margin-top: 4px;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 3px;\n}\n\n.resto__content {\n  padding: 2rem;\n}\n\n.resto__name {\n  font-size: 1rem;\n  color: rgb(255, 255, 255);\n}\n\n.resto__description {\n  font-size: 0.875rem;\n  color: rgb(255, 255, 255);\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n}\n.truncate-review {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.detail {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  height: 100%;\n  margin-bottom: 2rem;\n}\n\n.detail__menu {\n  display: flex;\n}\n\n.detail__content {\n  width: 100%;\n}\n.img__detail {\n  margin-right: 2rem;\n  max-width: 800px;\n  height: 100%;\n}\n.img__detail img {\n  border-radius: 1rem;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,\n    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  width: 100%;\n  /* object-fit: cover; */\n  height: 100%;\n}\n\n.detail__address {\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.detail__description {\n  font-size: 0.9375rem;\n  text-align: justify;\n  margin: 10px 0 10px 0;\n  color: rgb(0, 0, 0);\n}\n.category span {\n  padding: 6px;\n  color: rgb(0, 0, 0);\n  background-color: #50577A;\n  border-radius: 10px;\n}\n\n.menu {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.menu h2 {\n  font-size: 2rem;\n}\n.menu h4 {\n  font-size: 1.5rem;\n  color: rgb(0, 0, 0);\n}\n\n.item__menu {\n  font-weight: 300;\n  color: rgb(196, 196, 196);\n  line-height: 2;\n}\n\n.detail__menu {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-around;\n}\n\n.detail__food,\n.detail__drink {\n  background-color: #474E68;\n  padding: 20px 100px;\n  margin: 1rem;\n  border-radius: 20px;\n  height: 100%;\n}\n\n.title__review {\n  margin: 2rem 0 2rem;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.detail__review {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.detail__review__item {\n  display: flex;\n  padding: 20px;\n  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,\n    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;\n  border-radius: 20px;\n  margin: 10px;\n  width: 250px;\n  max-width: 300px;\n  height: 150px;\n  background-color: #50577A;\n}\n\n.review__name {\n  font-weight: 600;\n  color: rgb(0, 0, 0);\n}\n\n.review__date {\n  font-size: 0.812rem;\n  font-weight: 400;\n  color: rgb(255, 255, 255);\n}\n.review__body {\n  font-style: italic;\n  color: #fff;\n}\n.like {\n  font-size: 18px;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  background-color: #000000;\n  color: rgb(255, 0, 179);\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nfooter {\n  color: #fff;\n  background-color: #404258;\n  width: 100%;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.footer{\n  font-size: 14px;\n  color: white;\n}\n"],sourceRoot:""}]);const p=s},948:(n,A,e)=>{e.d(A,{Z:()=>p});var r=e(537),t=e.n(r),i=e(645),o=e.n(i),a=e(667),l=e.n(a),E=new URL(e(866),e.b),s=o()(t()),B=l()(E);s.push([n.id,"@media screen and (max-width: 576px) {\r\n  .navbar__menu {\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    top: 0;\r\n    right: -100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 5rem 0;\r\n    background-color: rgba(32, 30, 62, 0.89);\r\n    transition: 0.3s;\r\n  }\r\n\r\n  .nav__list {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .nav__item {\r\n    margin: 1rem 0;\r\n  }\r\n\r\n  .button__menu {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .button__menu a {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .button__close {\r\n    display: inline;\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n  }\r\n\r\n  .button__close a {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .title__apps{\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .title__jargon {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .show {\r\n    right: 0;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .title__apps {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .title__jargon {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .detail__menu {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .img__detail {\r\n    margin-right: 0;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n  .detail {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .img__detail {\r\n    margin-right: 0;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1280px) {\r\n  .card-container {\r\n    max-width: 1156px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  .title {\r\n    background-image: url("+B+");\r\n  }\r\n}","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;EACE;IACE,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,MAAM;IACN,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,eAAe;IACf,wCAAwC;IACxC,gBAAgB;EAClB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,kBAAkB;IAClB,SAAS;IACT,WAAW;EACb;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,QAAQ;EACV;AACF;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,sBAAsB;EACxB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,yDAAqE;EACvE;AACF",sourcesContent:['@media screen and (max-width: 576px) {\r\n  .navbar__menu {\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    top: 0;\r\n    right: -100%;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 5rem 0;\r\n    background-color: rgba(32, 30, 62, 0.89);\r\n    transition: 0.3s;\r\n  }\r\n\r\n  .nav__list {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .nav__item {\r\n    margin: 1rem 0;\r\n  }\r\n\r\n  .button__menu {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .button__menu a {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .button__close {\r\n    display: inline;\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n  }\r\n\r\n  .button__close a {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .title__apps{\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .title__jargon {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .show {\r\n    right: 0;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .title__apps {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .title__jargon {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .detail__menu {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .img__detail {\r\n    margin-right: 0;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n  .detail {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .img__detail {\r\n    margin-right: 0;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1280px) {\r\n  .card-container {\r\n    max-width: 1156px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n  .title {\r\n    background-image: url("../public/images/heros/hero-image_2-min.webp");\r\n  }\r\n}'],sourceRoot:""}]);const p=s},46:(n,A,e)=>{var r=e(379),t=e.n(r),i=e(795),o=e.n(i),a=e(569),l=e.n(a),E=e(565),s=e.n(E),B=e(216),p=e.n(B),d=e(589),C=e.n(d),m=e(756),g={};g.styleTagTransform=C(),g.setAttributes=s(),g.insert=l().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals},362:(n,A,e)=>{var r=e(379),t=e.n(r),i=e(795),o=e.n(i),a=e(569),l=e.n(a),E=e(565),s=e.n(E),B=e(216),p=e.n(B),d=e(589),C=e.n(d),m=e(948),g={};g.styleTagTransform=C(),g.setAttributes=s(),g.insert=l().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),t()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals}},e={};function r(n){var t=e[n];if(void 0!==t)return t.exports;var i=e[n]={id:n,exports:{}};return A[n](i,i.exports,r),i.exports}r.m=A,n=[],r.O=(A,e,t,i)=>{if(!e){var o=1/0;for(s=0;s<n.length;s++){for(var[e,t,i]=n[s],a=!0,l=0;l<e.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((n=>r.O[n](e[l])))?e.splice(l--,1):(a=!1,i<o&&(o=i));if(a){n.splice(s--,1);var E=t();void 0!==E&&(A=E)}}return A}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[e,t,i]},r.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return r.d(A,{a:A}),A},r.d=(n,A)=>{for(var e in A)r.o(A,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:A[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var A=r.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var e=A.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{r.b=document.baseURI||self.location.href;var n={954:0};r.O.j=A=>0===n[A];var A=(A,e)=>{var t,i,[o,a,l]=e,E=0;if(o.some((A=>0!==n[A]))){for(t in a)r.o(a,t)&&(r.m[t]=a[t]);if(l)var s=l(r)}for(A&&A(e);E<o.length;E++)i=o[E],r.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return r.O(s)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),r.nc=void 0;var t=r.O(void 0,[192,2,193,82,268],(()=>r(700)));t=r.O(t)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map