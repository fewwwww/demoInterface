export function uint2hexbytes32(a){
    let b=a.toString(16);
    for (let i=b.length;i<64;i++){
        b='0'+b;
    }
    console.log(a)
    return '0x'+b;
}