export function forEach(items: any, callback: any) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}