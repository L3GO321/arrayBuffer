export function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i++) {
            bufferView[i] = input.charCodeAt(i);
        }
        return bufferView;
    })(data);
}

export class ArrayBufferConverter {
    constructor() {
        this.buff = new ArrayBuffer();
    }

    load(buffer) {
        this.buff = buffer;
    }

    toString() {
        return String.fromCharCode.apply(null, this.buff);
    }
}