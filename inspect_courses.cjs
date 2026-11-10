const fs = require('fs');

function inspectText(path) {
  if (!fs.existsSync(path)) return '';
  const html = fs.readFileSync(path, 'utf8');
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
}

// Check courses
const courseFiles = fs.readdirSync('scraped').filter(f => f.startsWith('course_details_'));
for (const cf of courseFiles) {
  console.log(`\n=== COURSE: ${cf} ===`);
  const t = inspectText(`scraped/${cf}`);
  const match = t.match(/BASIC INFORMATION[\s\S]{1,400}/);
  console.log(match ? match[0] : t.substring(0, 300));
}

