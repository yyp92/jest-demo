export function fetchData(callback: (data: string) => void) {
    setTimeout(() => {
        callback('data');
    }, 1000);
}