from decryptor import Decryptor


def main():
    decryptor = Decryptor('data.txt')
    decryptor.get_data_from_file()
    decryptor.find_key()
    decryptor.output()

if __name__ == '__main__':
    main()
