use std::io::{self, Write};

fn main() {
    MiningGame();
}

fn MiningGame() {
    let mut stone = 0;
    let mut iron = 0;
    let mut gold = 0;
    let mut diamond = 0;

    loop {
        print!("Stone: {}\n", stone);
        if iron > 0 {
            print!("Iron: {}\n", iron);
        }
        if gold > 0 {
            print!("Gold: {}\n", gold);
        }
        if diamond > 0 {
            print!("Diamond: {}\n", diamond);
        }
        print!("Press 'm' to increment, 'q' to quit: ");
        io::stdout().flush().unwrap();

        let mut input = String::new();
        io::stdin().read_line(&mut input).expect("Failed to read line");

        let input = input.trim();

        if input == "m" {
            stone += 1;
            if (stone % 5 == 0) {
                iron += 1;
                print!("\nYou have found an iron ore!\n");
            }
            if (stone % 10 == 0) {
                gold += 1;
                print!("\nYou have found a gold ore!\n");
            }
            if (stone % 25 == 0) {
                diamond += 1;
                print!("\nYou have found a diamond!\n");
            }
        } else if input == "q" {
            println!("Goodbye!");
            break;
        } else {
            println!("Invalid input. Please press 'm' to increment or 'q' to quit.");
        }
    }
}
