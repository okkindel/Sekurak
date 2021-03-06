from cryptogram import Cryptogram
import operator

class Decryptor:

    def __init__(self, data_file):
        self.cryptograms = []

        self.data_file = data_file

        self.letters_freq = {
        '0': 10,  '1': 10,  '2': 10,  '3': 10,  '4': 10,  '5': 10,  '6': 10,  '7': 10,  '8': 10,  '9': 10,
            'a': 89, 'i': 82, 'o': 78, 'e': 77, 'z': 56, 'n': 55, 'r': 47, 'w': 47, 's': 43, 't': 40, 'c': 40, 'y': 38,
            'k': 35, 'd': 33, 'p': 31, 'm': 28, 'u': 25, 'j': 23, 'l': 21, 'b': 15, 'g': 14, 'h': 11, 'f': 3, 'q': 1,
            'v': 1, 'x': 1, ' ': 100, ',': 10, '.': 10, '-': 10, '"': 10, '!': 10, '?': 10, ':': 10, ';': 10, '(': 10,
            ')': 10, 
        }

    def get_data_from_file(self):
        with open(self.data_file, 'r') as file:
            for line in file:
                self.cryptograms.append(Cryptogram(line))


    def find_key(self):
        key = []

        longest = 0

        for crypt in self.cryptograms:
            if len(crypt.chars) > longest:
                longest = len(crypt.chars)

        for i in range(0, longest):
            possible_key = {}
            matching_cryptograms = []
            for crypt in self.cryptograms:
                if i < len(crypt.chars):
                    matching_cryptograms.append(crypt)

            for crypt in matching_cryptograms:
                for possible in self.letters_freq.keys():
                    tmp = (ord(crypt.get_chr(i)) ^ ord(possible), self.letters_freq[possible])
                    if tmp[0] not in possible_key.keys():
                        possible_key[tmp[0]] = tmp[1]
                    else:
                        possible_key[tmp[0]] = possible_key[tmp[0]] + self.letters_freq[possible]

            tmp_sorted = sorted(possible_key.items(), key=operator.itemgetter(1), reverse=True)
            possible_key = dict(tmp_sorted)

            key.append(self.find_best_key(i, possible_key))

        return key

    def find_best_key(self, index, possible_key):
        best_possible = ord(' ')
        best_cntr = 0

        matching_cryptograms = []
        for crypt in self.cryptograms:
            if index < len(crypt.chars):
                matching_cryptograms.append(crypt)

        for possible in possible_key.keys():
            cntr = 0

            for crypt in matching_cryptograms:
                if (chr(ord(crypt.get_chr(index)) ^ possible)) in self.letters_freq.keys():
                    cntr += 1

            if cntr > best_cntr:
                best_cntr = cntr
                best_possible = possible

            if cntr >= len(self.cryptograms):
                return possible

        return best_possible

    def output(self):
        key = self.find_key()
        for crypt in self.cryptograms:
            for i in range(0, len(crypt.chars)):
                print(chr(ord(crypt.get_chr(i)) ^ key[i]), end="")
