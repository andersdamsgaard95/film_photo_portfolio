import 'server-only';

export default async function getData() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/fetchImages`);
    const images = await result.json();

    return images;
}