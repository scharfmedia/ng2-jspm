import {bootstrap, ElementRef, ComponentAnnotation as Component, ViewAnnotation as View, Injectable} from 'angular2/angular2';
import {NgIf} from 'angular2/angular2';

@Injectable()
class ImagesFactory {
  getUrls(): Array {
    let url = 'http://www.reddit.com/r/perfectloops/top.json?sort=top&t=week'
    return fetch(url)
      .then(response => response.json())
      .then(json => json.data.children
        .map(a => a.data.url)
        .filter(a => /\.(gif|jpg|png)$/.exec(a)))
      .catch(error => console.log(error));
  }
}

@Component({
    selector: 'my-app',
    appInjector: [ImagesFactory]
})
@View({
  templateUrl: "src/hello.html",
  directives: [NgIf,MausComponent]
})
export class MyAppComponent {
    name: string;
    img: string;

    constructor(images: ImagesFactory) {
      this.name = "world";
      images.getUrls().then(zone.bind(ar => {
          let img = ar[Math.floor(Math.random()*ar.length)];
          this.img = img;
      }));
    }
}

@Component({
    selector: 'maus',
    properties: {
        "name": "name",
        "color": "color"
    }
})
@View({
  template: "<p align='center'>{{name}} Maus</p>",
  directives: [NgIf]
})
export class MausComponent {
    name: string;
    dom: any;

    constructor(el: ElementRef) {
        this.dom = el.domElement;
    }

    set color(value: string) {
        this.dom.style.color = value;
    }
}
