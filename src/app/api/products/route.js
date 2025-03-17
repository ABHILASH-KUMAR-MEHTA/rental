import path from 'path';
import fs from 'fs/promises';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(jsonData);

    return Response.json(products);
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
      status: 500,
    });
  }
}
