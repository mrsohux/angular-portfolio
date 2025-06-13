import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  certificates = [
    { 
      name: 'SQL (Advanced)', 
      image: 'assets/images/certificates/hackerank.png', 
      link: 'https://www.hackerrank.com/certificates/iframe/efc15d66b549' 
    },
    { 
      name: 'Software Engineer', 
      image: 'assets/images/certificates/hackerank.png', 
      link: 'https://www.hackerrank.com/certificates/iframe/1ba0d3b29796' 
    },
    { 
      name: 'C# (Basic)', 
      image: 'assets/images/certificates/hackerank.png', 
      link: 'https://www.hackerrank.com/certificates/iframe/9039880a6f40' 
    },
    { 
      name: 'Figma for Web Design', 
      image: 'assets/images/certificates/udemy.png', 
      link: 'https://www.udemy.com/certificate/UC-63f7afa7-546a-4744-9f49-e1da1cb39c31/' 
    },
    { 
      name: 'PHP - For Beginners', 
      image: 'assets/images/certificates/udemy.png', 
      link: 'https://www.udemy.com/certificate/UC-b9e7d398-1a6b-4b3a-8e8e-0e6707055536/' 
    },
    { 
      name: 'Computer Programming', 
      image: 'assets/images/certificates/futurelearn.png', 
      link: 'https://www.futurelearn.com/certificates/c5t6x57' 
    },
    { 
      name: 'Neural Network', 
      image: 'assets/images/certificates/coursera.png', 
      link: 'https://coursera.org/share/2c3f5767f5d5a9fdc8c3d9b106f02ed5' 
    },
    { 
      name: 'Web-Scraping in Python', 
      image: 'assets/images/certificates/microsoft.png', 
      link: 'https://verify.givemycertificate.com/verify/2005000911000047' 
    },
    { 
      name: 'Java Programming', 
      image: 'assets/images/certificates/greatlearning.png', 
      link: 'https://olympus1.greatlearning.in/course_certificate/VMQPNYGV' 
    },
    { 
      name: 'Basics Python', 
      image: 'assets/images/certificates/bitdegree.png', 
      link: 'https://www.bitdegree.org/api/certificate?slug=python-from-scratch&action=attachment&username=sohel-shaikh831165' 
    },
    { 
      name: 'Salesforce Pardot', 
      image: 'assets/images/certificates/bitdegree.png', 
      link: 'https://bitdegree-storage.s3.amazonaws.com/certificate-previews/cert-preview8311656421.jpeg' 
    },
    { 
      name: 'Data Structures & Algo.', 
      image: 'assets/images/certificates/udemy.png', 
      link: 'http://ude.my/UC-870fed68-50bf-4979-932c-d87a587b1a16' 
    }
  ];
}
