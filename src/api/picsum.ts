const baseUrl = 'https://picsum.photos';

export function getUrlBySeed( seed: string|number, size: number ): string {
    return `${baseUrl}/seed/${seed}/${size}`
}