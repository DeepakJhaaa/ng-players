import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

import { Player } from '../common/player.model';
import { PlayersService } from '../common/players.service';
import { ListPlayersComponent } from '../list-players/list-players.component';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  @Input() playerId: any;
  playerObj: any = {};

  public player: FormGroup;
  isLoading = false;
  statusMessage: any;

  charPattern: any;
  numPattern: any;

  constructor(
    public _fb: FormBuilder,
    private _playersService: PlayersService,
    private _listPlayer: ListPlayersComponent
  ) {}

  ngOnInit() {
    console.log('Player ID : ' + this.playerId);
    this.getPlayerData(this.playerId);
    this.charPattern = '[a-zA-Z][a-zA-Z ]+';
    this.numPattern = '^[0-9]+(.[0-9]{1,4})?$';
    this.player = this._fb.group({
      fname: ['', [Validators.required, Validators.pattern(this.charPattern)]],
      lname: ['', [Validators.required, Validators.pattern(this.charPattern)]],
      salary: ['', [Validators.required, Validators.pattern(this.numPattern)]],
      points: ['', [Validators.required, Validators.pattern(this.numPattern)]],
      rebounds: [
        '',
        [Validators.required, Validators.pattern(this.numPattern)]
      ],
      assists: ['', [Validators.required, Validators.pattern(this.numPattern)]],
      steals: ['', [Validators.required, Validators.pattern(this.numPattern)]],
      blocks: ['', [Validators.required, Validators.pattern(this.numPattern)]]
    });
  }
  getPlayerData(id) {
    const playerData = id;
    this._playersService.getPlayerData(id).subscribe((player: Player[]) => {
      console.log(player);
      this.playerObj = player;
      this.player.controls['fname'].setValue(this.playerObj.fname);
      this.player.controls['lname'].setValue(this.playerObj.lname);
      this.player.controls['salary'].setValue(this.playerObj.salary);
      this.player.controls['points'].setValue(this.playerObj.points);
      this.player.controls['rebounds'].setValue(this.playerObj.rebounds);
      this.player.controls['assists'].setValue(this.playerObj.assists);
      this.player.controls['steals'].setValue(this.playerObj.steals);
      this.player.controls['blocks'].setValue(this.playerObj.blocks);
      console.log(this.player);
    });
  }

  updatePlayer(player) {
    const playerData = this.player.value;
    playerData._id = this.playerId;
    this.statusMessage = 'Updating the data . . .';
    this.isLoading = true;
    this._playersService.updatePlayerData(playerData).subscribe(response => {
      this.statusMessage = 'Update Successfully ...!!';
      this.isLoading = false;
      this._listPlayer.updateModalRef.hide();
      this._listPlayer.getPlayers();
    });
  }
}
