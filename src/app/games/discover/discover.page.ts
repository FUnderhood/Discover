import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/games/game.model';
import { GamesService } from 'src/app/games/games.service';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  games: Game[];
  listedGames: Game[];

  constructor(private gamesService: GamesService,
              private menuCtrl: MenuController) { }

  ngOnInit() {
    this.games = this.gamesService.games;
    this.listedGames = this.games.slice(0);
  }
  onOpenMenu(){
    this.menuCtrl.toggle();
  }
  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail> ){
    console.log(event.detail)
  }

}
