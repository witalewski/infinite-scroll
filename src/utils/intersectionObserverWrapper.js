class IntersectionObserverWrapper {
  callbacks = [];
  intersectionObserver = new IntersectionObserver((entries, observer) => {
    // console.log(entries);
    // entries.forEach(elem => console.log(elem.target, elem.isIntersecting));
    entries.forEach(
      elem => {
        // elem.target.style.display = elem.isIntersecting ? 'block' : 'none';
        if (elem.target.childNodes[0].className && elem.target.childNodes[0].className.indexOf('loaded') === -1) {
          if (elem.isIntersecting && elem.target.childNodes[0].className.indexOf('hidden') === -1) {
            console.log("Hiding",elem.target.childNodes[0]);
            elem.target.childNodes[0].classList.add('image--hidden');
          } else if (
            !elem.isIntersecting &&
            elem.target.childNodes[0].className.indexOf('hidden') > -1
          ) {
            console.log("Showing",elem.target.childNodes[0]);
            elem.target.childNodes[0].classList.remove('image--hidden');
          }
        }
      }
    );
  }, {
    treshold: 1.0
  });
}

export const intersectionObserverWrapper = new IntersectionObserverWrapper();
