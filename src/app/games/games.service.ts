import { Injectable } from '@angular/core';

import { Game } from './game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService{
  private _games: Game[] = [
    new Game(
      "g1",
      "KOF",
      "Two of three powerful artifacts allow Rugal Bernstein, a man of evil intent, to enter and control an alternate dimension where gamers have been entering into martial arts combat for fun.",
      "https://www.filmmusicsite.com/images/covers/large/54097.jpg"),
    new Game(
      "g2",
      "Mario",
      "Mario is the main character and titular protagonist of the long-running and highly successful video game franchise of the same name.",
      "https://media.gq-magazin.de/photos/60ec3b3a11aa062eef6d7b25/2:3/w_1331,h_1997,c_limit/super-mario-64-netzfundsteuck-technik-gadget.jpg"),
    new Game(
      "g3",
      "jump",
      "Doodle Jump is an app for an iOS devices, Android, Symbian, and Windows Phone 7 where you control a creature called The Doodler to jump on multiple platforms and jump as high as you can without falling. You'll encounter dangerous monsters, countless obstacles and sweet rewards the higher you go up.",
      "https://i.pinimg.com/originals/a0/c3/09/a0c309739774fefe8309e6750b0053a3.jpg"),
    new Game(
      "g4",
      "snake",
      "The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food (or some other item), trying to avoid hitting its own tail or the edges of the playing area. Each time the snake eats a piece of food, its tail grows longer, making the game increasingly difficult.",
      "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/https://img.poki.com/9618dc37-d71d-4640-a16c-be9b93934d23.png"),
    new Game(
      "g5",
      "Assasin creed",
      "Assassin's Creed is an action-adventure game set in an open world environment and played from a third-person perspective in which the player primarily assumes the role of Altaïr, as experienced by protagonist Desmond Miles.",
      "https://i.pinimg.com/736x/6e/91/5a/6e915a40abe31e1dcd21698d7312b776--the-assassin-assassins-creed.jpg"),
  ];

  get games(){
    return [...this._games];
  }

  constructor(){}

  getGame(id: string){
    return {...this._games.find(g => g.id === id)};
  }
}
