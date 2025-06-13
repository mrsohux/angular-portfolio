import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  isNavOpen: boolean = false;
  isChatOpen = false;

  constructor() {
  }

  downloadResume(): void {
    const resumePath = 'assets/Sohel_Resume.pdf';
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', resumePath);
    link.setAttribute('download', 'resume.pdf');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
  @HostListener('document:touchstart', ['$event'])
  closeNavOnClickOutside(event: TouchEvent) {
    this.closeNav()
  }
  modelClose() {
    this.isNavOpen = false;
  }
  closeNav() {
    this.isNavOpen = false;
  }
  
  joinDate = new Date(2020, 9, 23); 

  get experienceYears(): string {
    const now = new Date();
    let years = now.getFullYear() - this.joinDate.getFullYear();
    let months = now.getMonth()   - this.joinDate.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }
    // as a decimal with one digit:
    const decimal = (years + months/12).toFixed(1);
    return decimal;
  }
}
