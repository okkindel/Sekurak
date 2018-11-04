from decryptor import Decryptor


def main():
    dec = Decryptor('data.txt')
    dec.get_data_from_file()
    dec.find_key()
    dec.output()


if __name__ == '__main__':
    main()
