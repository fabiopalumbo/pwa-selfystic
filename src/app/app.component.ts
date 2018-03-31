import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'app';
  // constant for swipe action: left or right
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  // our list of avatars
  avatars = [
    {
      name: 'kristy',
      image: 'http://semantic-ui.com/images/avatar2/large/kristy.png',
      visible: true
    },
    {
      name: 'matthew',
      image: 'http://semantic-ui.com/images/avatar2/large/matthew.png',
      visible: false
    },
    {
      name: 'chris',
      image: 'http://semantic-ui.com/images/avatar/large/chris.jpg',
      visible: false
    },
    {
      name: 'jenny',
      image: 'http://semantic-ui.com/images/avatar/large/jenny.jpg',
      visible: false
    }
  ];

  // action triggered when user swipes
  swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    const nextIndex = Math.floor(Math.random() * this.avatars.length);

    // toggle avatar visibility
    this.avatars.forEach((x, i) => x.visible = (i === nextIndex));
  }
}
