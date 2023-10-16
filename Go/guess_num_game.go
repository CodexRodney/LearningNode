package main

import (
	"bufio"
	"fmt"
	"log"
	"math/rand"
	"os"
	"strconv"
	"strings"
	"time"
)

func main() {
	// generating a random in go
	rand.Seed(time.Now().UnixNano())
	random := rand.Intn(100)
	var conv_input int
	for x := 0; x < 10; x++ {
		fmt.Print("Kindly Guess A Number Between 1 and 100: ")

		// getting the number from the user
		reader := bufio.NewReader(os.Stdin)
		input, err := reader.ReadString('\n')
		if err != nil {
			log.Fatal(err)
		}
		conv_input, err = strconv.Atoi(strings.TrimSpace(input))
		if err != nil {
			log.Fatal(err)
		}

		if random > conv_input {
			fmt.Println("Oops your Guess was Low")
		} else if random < conv_input {
			fmt.Println("Oops. Your guess was High")
		} else {
			fmt.Println("Good job! You guessed it!")
			break
		}
	}

	if conv_input != random {
		fmt.Println("Sorry you did not guess my number. It was: ", random)
	}
}
