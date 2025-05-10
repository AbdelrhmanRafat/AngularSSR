import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {
  isMobileMenuOpen = false;
  wishlistCount = 3;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const menu = this.mobileMenu.nativeElement;
  
    // Start hidden
    this.renderer.setStyle(menu, 'display', 'none');
  }
    

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }  
}
