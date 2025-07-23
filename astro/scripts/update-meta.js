#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔄 Updating meta descriptions from CSV...\n');

try {
  // Run the CSV processing script
  execSync('node scripts/process-meta-csv.js', { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  
  console.log('\n✅ Meta descriptions updated successfully!');
  console.log('📝 Next steps:');
  console.log('   1. Review the generated meta descriptions');
  console.log('   2. Test the build: npm run build');
  console.log('   3. Deploy your changes');
  
} catch (error) {
  console.error('❌ Error updating meta descriptions:', error.message);
  process.exit(1);
} 