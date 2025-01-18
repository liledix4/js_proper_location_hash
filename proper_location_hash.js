export async function properLocationHash() {
    if (location.hash !== '') {
        const rememberedHash = location.hash;
        location.hash = '';
        location.hash = rememberedHash;
    }
}