import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})

// Not using lifecycles so I didn't implement.
export class SlideshowComponent {
  count;
  assignmentData;
  constructor() {
    this.count = 0;
    this.assignmentData = {
      name: "Jerry Wei",
      studentID: 101091730,
      images: [
        {
          link: "assets/images/1.jpg",
          caption: "A collection of Apples.",
          active: true
        },
        {
          link: "assets/images/2.jpg",
          caption: "A collection of Oranges.",
          active: false
        },
        {
          link: "assets/images/3.jpg",
          caption: "A collection of Pears.",
          active: false
        },
        {
          link: "assets/images/4.jpg",
          caption: "A collection of Bananas.",
          active: false
        },
        {
          link: "assets/images/5.jpg",
          caption: "A collection of Tomatoes.",
          active: false
        },
        {
          link: "assets/images/6.jpg",
          caption: "A collection of Lychee.",
          active: false
        },
        {
          link: "assets/images/7.jpg",
          caption: "A collection of Strawberries.",
          active: false
        },
        {
          link: "assets/images/8.jpg",
          caption: "A collection of Blackberries.",
          active: false
        },
        {
          link: "assets/images/9.jpg",
          caption: "A collection of Raspberries.",
          active: false
        },
        {
          link: "assets/images/10.jpg",
          caption: "A collection of Kiwi.",
          active: false
        }
      ]
    }
  }
  
  // It can loop if needed instead of using disabled.
  increaseCount() {
    const maxImageIndex = this.assignmentData.images.length - 1;
    this.count === maxImageIndex?
      this.count = 0:
      this.count++;
    this.setFocus();
  }

  decreaseCount() {
    this.count === 0?
      this.count = 9:
      this.count--;
    this.setFocus();
  }

  setCount(index:number) {
    this.count = index;
    this.setFocus();
  }

  // Used function programming instead as it was easier.
  setFocus() {
    this.assignmentData.images = this.assignmentData.images.map((image, index) => {
      if (index === this.count) {
        return {...image, active:true};
      }
      return {...image, active:false};
    });
  }

}
