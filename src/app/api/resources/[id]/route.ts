import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'db.json');

async function readDb() {
  const data = await fs.readFile(dbPath, 'utf-8');
  return JSON.parse(data);
}

async function writeDb(data: any[]) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const resources = await readDb();
    const filteredResources = resources.filter((resource: any) => resource.id !== id);

    if (filteredResources.length === resources.length) {
      return NextResponse.json({ error: 'Resource not found' }, { status: 404 });
    }

    await writeDb(filteredResources);
    return NextResponse.json({ message: 'Resource deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete resource' }, { status: 500 });
  }
}