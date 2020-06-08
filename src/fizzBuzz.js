class Javabuzz {
    isDivisibleByThreeAndFive(number) {
        if (number % 3 == 0 && number % 5 == 0) {
            return "FizzBuzz"
        }
    }
    isDivisibleByThree(number) {
        if (number % 3 == 0) {
            return "Fizz"
        }
        else {
            return number
        }
    }
    isDivisibleByFive(number) {
        if (number % 5 == 0) {
            return "Buzz"
        }
        else {
            return number
        }
    }

    isJavaBuzz(number) {
        if (this.isDivisibleByThreeAndFive(number)) {
            return "FizzBuzz"
        }
        else if (number % 5 == 0) {
            return "Buzz"
        }
        else if (number % 3 == 0) {
            return "Fizz"
        }
        else {
            return number
        }
    }
}
