from flask import Flask

app = Flask(__name__)

def is_prime(n):
    if n < 2:
        return False
    i = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += 1
    return True

@app.route("/prime_number/<int:number>")
def prime_number(number):
    return {"Number": number, "isPrime": is_prime(number)}

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000)