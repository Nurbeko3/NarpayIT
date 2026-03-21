import fs from 'fs';
import path from 'path';

const cssDir = 'c:/Users/user/Desktop/NarpayIT/src/css';
const files = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));

let changedFiles = 0;

for (const file of files) {
  const filePath = path.join(cssDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const initialContent = content;

  // Comment out backdrop-filter
  content = content.replace(/(\s*)(backdrop-filter:\s*blur\([^)]+\);)/g, '$1/* $2 ushlandi performance uchun */');
  
  if (content !== initialContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    changedFiles++;
    console.log(`Updated ${file}`);
  }
}

console.log(`Optimization complete. Changed ${changedFiles} files.`);
