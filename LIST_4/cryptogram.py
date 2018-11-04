class Cryptogram:

    def __init__(self, cipher):
        self.chars = []
        tmp = str(cipher).split(' ')

        for ch in tmp:
            self.chars.append(chr(int(ch, 2)))

    def get_chr(self, index):
        if index < len(self.chars):
            return self.chars[index]
        else:
            return '*'
