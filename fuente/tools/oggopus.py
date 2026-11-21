# Arma un archivo Ogg Opus a partir de paquetes Opus sueltos (2 bytes de largo + paquete),
# como los que entrega el codificador del navegador (WebCodecs). Uso: oggopus.py entrada.b64 salida.opus muestras
import base64, struct, sys, zlib

def crc_table():
    t = []
    for i in range(256):
        r = i << 24
        for _ in range(8):
            r = ((r << 1) ^ 0x04C11DB7) if r & 0x80000000 else (r << 1)
        t.append(r & 0xFFFFFFFF)
    return t
T = crc_table()
def ogg_crc(data):
    c = 0
    for b in data:
        c = ((c << 8) ^ T[((c >> 24) & 0xFF) ^ b]) & 0xFFFFFFFF
    return c

def page(serial, seq, granule, packets, bos=False, eos=False):
    segs = []
    for p in packets:
        n = len(p)
        while n >= 255:
            segs.append(255); n -= 255
        segs.append(n)
    flags = (2 if bos else 0) | (4 if eos else 0)
    head = b'OggS' + bytes([0, flags]) + struct.pack('<qIII', granule, serial, seq, 0) + bytes([len(segs)]) + bytes(segs)
    body = b''.join(packets)
    crc = ogg_crc(head + body)
    return head[:22] + struct.pack('<I', crc) + head[26:] + body

def mux(raw, samples, pre_skip=312):
    pk, o = [], 0
    while o < len(raw):
        n = (raw[o] << 8) | raw[o + 1]; o += 2
        pk.append(raw[o:o + n]); o += n
    assert o == len(raw), 'paquetes mal armados'
    serial = 0x43415049
    head = b'OpusHead' + bytes([1, 1]) + struct.pack('<HIhB', pre_skip, 48000, 0, 0)
    tags = b'OpusTags' + struct.pack('<I', 4) + b'capi' + struct.pack('<I', 0)
    out = [page(serial, 0, 0, [head], bos=True), page(serial, 1, 0, [tags])]
    seq, gran, i = 2, 0, 0
    total = samples + pre_skip
    while i < len(pk):
        grp = pk[i:i + 50]; i += len(grp)
        gran = min(total, gran + 960 * len(grp))
        out.append(page(serial, seq, gran if i < len(pk) else total, grp, eos=i >= len(pk))); seq += 1
    return b''.join(out), len(pk)

if __name__ == '__main__':
    raw = base64.b64decode(open(sys.argv[1]).read().strip())
    data, n = mux(raw, int(sys.argv[3]))
    open(sys.argv[2], 'wb').write(data)
    print(sys.argv[2], n, 'paquetes', len(data), 'bytes')
