package ctci6.chpt7;

import java.util.Collections;
import java.util.Scanner;
import java.util.Stack;

/**
 * Created by hao on 10/8/16.
 */

public class Q1 {
    private enum CardType {
        Spade(0), Club(1), Diamond(2), Heart(3);
        private int val;
        private CardType(int val) {
            this.val = val;
        }
    }
    private class Card {
        private CardType type;
        private int val;
        public Card(CardType type, int val) {
            this.type = type;
            this.val = val;
        }
        public int gameVal() {
            return val > 10 ? 10 : val;
        }
    }

    private class Deck {
        private Stack<Card> cards;
        private int capacity;
        public Deck(int M) {
            cards = new Stack<>();
            capacity = M * 13 * 4;
            fillDeck(M);
        }
        private void fillDeck(int M) {
            for (int i = 0; i < M; i++) {
                for (CardType t : CardType.values()) {
                    for (int k = 1; k <= 13; k++) {
                        Card card = new Card(t, k);
                        cards.push(card);
                    }
                }
            }
            Collections.shuffle(cards);
        }
        public boolean isEmpty() {
            return cards.isEmpty();
        }
        public boolean isHalfEmpty() {
            return cards.size() < capacity / 2;
        }
        private void cleanDeck() {
            cards = new Stack<>();
        }
        public void refill() {
            cleanDeck();
            fillDeck(capacity / 13 / 4);
        }
        public Card drawCard() {
            return cards.pop();
        }
    }

    private class Hand {
        private Stack<Card> cards;
        public Hand() {
            cards = new Stack<>();
        }
        public void add(Card card) {
            cards.push(card);
        }
        public int val() {
            int val = 0;
            for (Card c : cards) {
                val += c.val;
            }
            return val;
        }
    }
    private class Game {
        private Deck deck;
        private Hand maker;
        private Hand player;
        public boolean stoped;
        public Game() {
            deck = new Deck(4);
        }
        public void start() {
            deck.refill();
        }
        public void startRound() {
            if (deck.isHalfEmpty()) {
                System.out.println("The deck is almost empty, shuffle the deck.");
                deck.refill();
            }
            maker = new Hand();
            player = new Hand();
            Card makerHidden = deck.drawCard();
            Card playerHidden = deck.drawCard();
            Card makerVisible = deck.drawCard();
            Card playerVisible = deck.drawCard();
            maker.add(makerHidden);
            player.add(playerHidden);
            maker.add(makerVisible);
            player.add(playerVisible);
            if (maker.val() == 21) {
                makerWins();
            } else if (player.val() == 21) {
                playerWins();
            }
            System.out.println("The maker got something and a " + makerVisible.val + "; You got an " + playerHidden.val + " and a " + playerVisible.val);
        }
        public void drawCards() {
            Card makerVisible = deck.drawCard();
            Card playerVisible = deck.drawCard();
            maker.add(makerVisible);
            player.add(playerVisible);
            if (maker.val() > 21) {
                playerWins();
                return;
            } else if (maker.val() == 21) {
                makerWins();
                return;
            } else if (player.val() > 21) {
                makerWins();
                return;
            } else if (player.val() == 21) {
                playerWins();
                return;
            }
            System.out.println("The maker got a " + makerVisible.val + "; You got a " + playerVisible.val);
        }
        public void closeRound() {
            stoped = false;
        }
        public void playerStop() {
            judge();
        }
        public void push() {
            stoped = true;
            System.out.println("You and the maker both got 21 points!");
            closeRound();
        }
        public void makerWins() {
            stoped = true;
            System.out.println("The maker wins!");
        }
        public void playerWins() {
            stoped = true;
            System.out.println("You win!");
        }
        public void judge() {
            if (maker.val() == player.val()) {
                push();
            } else if (maker.val() > 21) {
                playerWins();
            } else if (player.val() > 21) {
                makerWins();
            } else if (maker.val() > player.val()) {
                makerWins();
            } else {
                playerWins();
            }
        }
    }

    public Q1() {
        Game game = new Game();
        game.start();
        game.startRound();
        Scanner reader = new Scanner(System.in);
        while (!game.stoped) {
            System.out.println("What's your next move? 1 - Draw a new card; 2 - Stop");
            int move = reader.nextInt();
            if (move == 1) {
                game.drawCards();
            } else if (move == 2) {
                game.playerStop();
            } else {
                System.out.println("Illegal move.");
            }
        }
    }

    public static void main(String[] args) {
        Q1 q = new Q1();
    }
}
