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

export async function GET() {
  try {
    const resources = await readDb();
    return NextResponse.json(resources);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read resources' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, category, url } = body;

    if (!title || !description || !category || !url) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resources = await readDb();
    const newResource = {
      id: Date.now().toString(),
      title,
      description,
      category,
      url,
    };

    resources.push(newResource);
    await writeDb(resources);

    return NextResponse.json(newResource, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create resource' }, { status: 500 });
  }
}