import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
projects = [
  {
    topPosition: 0,
    title: 'DIGA Prescription Workflow',
    badgeColors: ['#14b8a6', '#f97316', '#60a5fa'],
    tools: ['Angular', '.NET Core', 'REST API', 'SQL Server', 'XML', 'FHIR'],
    myRole: 'Full Stack Developer',
    year: 2024,
    developedAt: 'Deutsche Telekom Clinical Solutions India',
    description: 'Developed a secure digital prescription system for KBV-certified DiGA applications in the German healthcare sector. Created Angular components for capturing and validating prescription data per KBV standards. Built backend services in .NET Core to generate FHIR-compliant XML documents and integrate with health insurance APIs. Ensured compliance with privacy laws and streamlined prescription workflows, improving patient access to digital therapies.'
  },
  {
    topPosition: 68,
    title: 'CEDOCS – Bed Occupancy Tracker',
    badgeColors: ['#14b8a6', '#f97316', '#60a5fa'],
    tools: ['AngularJS', 'ASP.NET MVC', 'C#', 'SQL Server'],
    myRole: 'Full Stack Developer',
    year: 2024,
    developedAt: 'Deutsche Telekom Clinical Solutions India',
    description: 'Built a hospital bed occupancy tracking system to monitor ICU and general beds in real-time during peak loads. Designed dashboards with AngularJS for live visualization and historical reporting. Backend ASP.NET MVC services provided patient admission and discharge data integration. Supported better resource allocation and emergency response planning, improving hospital capacity management especially during COVID-19 surges.'
  },
  {
    topPosition: 136,
    title: 'Image Steganography',
    badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
    tools: ['Java', 'Swing UI', 'Image Processing', 'File I/O', 'LSB Algorithm', 'JPEG/PNG Support', 'Data Security','cryptography'],
    myRole: 'Java Developer',
    year: 2016,
    developedAt: 'Self-initiated / Personal Project',
    description: 'Developed a Java-based image steganography application to securely embed hidden messages inside images using the Least Significant Bit (LSB) algorithm. Implemented encoding and decoding features with an intuitive Swing UI. Ensured minimal visual distortion in carrier images and supported JPEG and PNG formats. Focused on enhancing data security and confidentiality for covert communication.'
  },
  {
    topPosition: 204,
    title: 'MMIT College Android Application',
    badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
    tools: ['Java', 'Android Studio', 'SQLite', 'Figma','Google Maps', 'Push Notifications'],
    myRole: 'Android Developer',
    year: 2017,
    developedAt: 'Academic Project at MMIT College',
    description: 'Designed and developed an Android app to digitize college management processes including student, faculty, and course management. Implemented role-based access controls and offline data storage using SQLite. Created a responsive UI with XML layouts for easy navigation. The app reduced manual effort and improved data organization within academic administration.'
  },
  {
    topPosition: 272,
    title: 'Brain Tumor Segmentation and Detection',
    badgeColors: ['#f87171', '#fb923c', '#bbf7d0'],
    tools: ['Java', 'ImageJ', 'OpenCV', '2D MRI Analysis','Swing UI','Sqlite', 'Grayscale Filtering', 'Medical Imaging', 'Image Processing'],
    myRole: 'Java Developer',
    year: 2017,
    developedAt: 'Academic Final year Project at MMIT College',
    description: 'Created a Java-based medical image analysis tool to detect brain tumors from MRI scans using advanced image processing techniques. Developed modules for preprocessing, segmentation, and highlighting tumor regions. Calculated tumor size and severity, supporting DICOM format and grayscale filtering. Provided an intuitive GUI for medical professionals to assist in early diagnosis and treatment planning.'
  },
];

}
