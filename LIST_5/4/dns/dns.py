import subprocess
import parser


def send_dns_resp():

    cmd = ['sudo', 'tshark', '-i', 'wlp3s0', '-l', '-Y', 'dns.qry.name contains \"trello\"']

    process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)
    pattern = {'name': '', 'value': '', 'path': '/'}

    while True:
        output = process.stdout.readline().decode('utf-8')

        if output == '' and process.poll() is not None:
            break

        if output:
            parser.parse(output)

