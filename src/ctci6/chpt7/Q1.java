package ctci6.chpt7;

import java.util.Collections;
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
            cards = null;
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
        public Game() {
            deck = new Deck(4);
        }
        public void start() {
            deck.refill();
        }
        public void startRound() {
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
            judge();
            System.out.println("The maker got an " + makerVisible.val + "; You got an " + playerHidden.val + " and a " + playerVisible.val);
        }
        public void closeRound() {

        }
        public void close() {

        }
        public void playerGiveUp() {

        }
        public void push() {
            System.out.println("You and the maker both got 21 points!");
            closeRound();
        }
        public void makerWins() {

        }
        public void playerWins() {

        }
        public void judge() {
            if (maker.val() == 21 && player.val() == 21) {
                push();
            } else if (maker.val() == 21) {
                makerWins();
            } else if (player.val() == 21) {
                playerWins();
            }
        }
        public void restart() {
            close();
            start();
        }
    }

    public static void main(String[] args) {

    }
}
