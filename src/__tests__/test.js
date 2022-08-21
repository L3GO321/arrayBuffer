import { getBuffer, ArrayBufferConverter } from "../index";

test('test', () => {
    const arr = new ArrayBufferConverter();
    arr.load(getBuffer());

    expect(arr.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}')
})