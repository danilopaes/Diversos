import secrets
from stegano import lsb

secret = lsb.hide("index.jpeg", "cronw.txt");

secret.save("index.jpeg");