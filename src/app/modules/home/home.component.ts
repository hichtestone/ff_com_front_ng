import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  // References to elements using @ViewChild
  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;
  @ViewChild('header') header!: ElementRef;
  @ViewChild('backTopBtn') backTopBtn!: ElementRef;

  // Event handlers
  toggleNavbar() {
    this.navbar.nativeElement.classList.toggle('active');
    this.overlay.nativeElement.classList.toggle('active');
  }

  closeNavbar() {
    this.navbar.nativeElement.classList.remove('active');
    this.overlay.nativeElement.classList.remove('active');
  }

  headerActive() {
    if (window.scrollY > 80) {
      this.header.nativeElement.classList.add('active');
      this.backTopBtn.nativeElement.classList.add('active');
    } else {
      this.header.nativeElement.classList.remove('active');
      this.backTopBtn.nativeElement.classList.remove('active');
    }
  }

  ngOnInit() {
    window.addEventListener('scroll', this.headerActive);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.headerActive);
  }
}
