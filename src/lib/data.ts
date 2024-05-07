import 'server-only';
import fs from 'fs';
import path from 'path';
import { TeamLeafItemProps } from '@/components/tea-leaf-item';

export function getData() {
  const filePath = path.join(process.cwd(), 'src/lib/data.txt');
  const txtContent = fs.readFileSync(filePath, 'utf-8');
  const data: TeamLeafItemProps[] = [];
  const lines = txtContent.split('\n');
  lines.forEach(line => {
    const [name = "", description = ""] = line.split(': ');
    data.push({ name: name.trim(), description: description.trim() });
  });
  return data;
}