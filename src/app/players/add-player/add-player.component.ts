import { Component, OnInit, Inject, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { Player } from '../common/player.model';
import { PlayersService } from '../common/players.service';
import { ListPlayersComponent } from '../list-players/list-players.component';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  @Input() playerObj: Player[];
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
    this.charPattern = '[a-zA-Z][a-zA-Z ]+';
    this.numPattern = '^[0-9]+(.[0-9]{1,4})?$';
    this.player = this._fb.group({
      fname: ['', [Validators.required, Validators.pattern(this.charPattern)]],
      lname: ['', [Validators.required, Validators.pattern(this.charPattern)]],
      salary: ['', [Validators.required]],
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

  addPlayer(player) {
    const playerData = this.player.value;
    this.statusMessage = 'Saving the data . . .';
    this.isLoading = true;
    this._playersService.addPlayerData(playerData).subscribe(response => {
      this.statusMessage = 'Saved Successfully ...!!';
      this.isLoading = false;
      this._listPlayer.newModalRef.hide();
      this._listPlayer.getPlayers();
    });
  }
}
