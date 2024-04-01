const fs = require('fs');
const path = require('path');

const data = [
    {
      title: "HOA & Community",
      description: "We provide services for HOA & Community.",
      image: "/exterior.png",
      link: "/hoa",
    },
    {
      title: "Industrial",
      description: "We provide services for Industrial.",
      image: "/exterior.png",
      link: "/industrial",
    },
    {
      title: "Retail",
      description: "We provide services for Retail.",
      image: "/exterior.png",
      link: "/retail",
    },
    {
      title: "Healthcare",
      description: "We provide services for Healthcare.",
      image: "/exterior.png",
      link: "/healthcare",
    },
    {
      title: "Hospitality",
      description: "We provide services for Hospitality.",
      image: "/exterior.png",
      link: "/hospitality",
    },
    {
      title: "School",
      description: "We provide services for School.",
      image: "/exterior.png",
      link: "/school",
    },
    {
      title: "Amusement",
      description: "We provide services for Amusement.",
      image: "/exterior.png",
      link: "/amusement",
    },
];

// Function to create folders and page.jsx files
const createFoldersAndFiles = (data) => {
    data.forEach(item => {
        const folderPath = path.join(__dirname, 'app', 'residential-painting', item.link.substring(1)); // Remove leading '/'
        fs.mkdirSync(folderPath, { recursive: true }); // Create folder recursively

        // Create page.jsx file inside the folder
        const pageContent = `import React from 'react';

const Page = () => {
    return (
        <div className=''>page</div>
    );
}

export default Page;`;

        const pageFilePath = path.join(folderPath, 'page.jsx');
        fs.writeFileSync(pageFilePath, pageContent);

        console.log(`Folder and page.jsx created: ${folderPath}`);
    });
};

// Call the function to create folders and files
createFoldersAndFiles(data);
