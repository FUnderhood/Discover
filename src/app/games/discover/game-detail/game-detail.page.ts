import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/games/game.model';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/games/games.service';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.page.html',
  styleUrls: ['./game-detail.page.scss'],
})
export class GameDetailPage implements OnInit {
  game: Game;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private gamesService: GamesService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('gameId')){
        this.navCtrl.navigateBack('/games/pages/discover');
        return;
      }
      this.game = this.gamesService.getGame(paramMap.get('gameId'));
    })
  }

}
