# **Developer Portfolio**
## Welcome to my personal portfolio website!  
Built to showcase my projects, skills, and experience as a software developer.

# **Demo 🎥**
![image](https://github.com/user-attachments/assets/23794ae1-9b9d-4893-9402-5850b7d93e4a)

# View live preview [here](https://mrsohux.github.io/angular-portfolio/).
# **Sections 🔖**
- **HERO SECTION**
- **ABOUT ME**
- **EXPERIENCE**
- **SKILLS**
- **PROJECTS**
- **EDUCATION**
- **BLOG**
- **CONTACTS**

# **Installation ⬇️**
## You will need to download Git and Node to run this project
- **[Git](https://git-scm.com/downloads)**
- **[Node](https://nodejs.org/en/download/)**
## Make sure you have the latest version of both Git and Node on your computer.

```bash
node --version
git --version
```
# **Getting Started 🎯**
## Fork and Clone the repo
To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands
```bash
git clone https://github.com/<YOUR GITHUB USERNAME>/portfolio.git
cd portfolio
```
## Install packages from the root directory
```bash
npm install
# or
yarn install
```
Then, run the development server:
```bash
npm run dev
# or
yarn dev
```
Open http://localhost:4200 with your browser to see the result.

# **Usage 🕹️**
Go to emailjs.com and create a new account for mail sending. In a free trial, you will get 200 emails per month. After setting up the email JS account, Please create a new .env file from the .env.example file.

Eg:
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
```
## Then, Customize data in the utils/data folder.
Eg:
```bash
export const personalData = {
  name: "Sohel Shaikh",
  profile: "/profile.png",
  designation: "Full-Stack Software Developer",
  description: "My name is Sohel Shaikh....",
  resume: "...",
};
```
devUsername Used for fetching blog from dev. to.

# **Packages Used 📦**

Here is a list of packages used in this project:

| Package             | Description             |
|---------------------|-------------------------|
| Angular             | Angular framework       |
| @emailjs/browser    | Email sending library   |
| font Awesome-icons         | Icon library     |
| toaster     | Notification library    |
| css                | CSS preprocessor        |
| bootstrap         | CSS framework           |
