import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Player } from '../common/player.model';
import { PlayersService } from '../common/players.service';
import { AddPlayerComponent } from '../add-player/add-player.component';
import { EditPlayerComponent } from '../edit-player/edit-player.component';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {
  players: Player[];
  playerId: any;

  // Different Modal Initialization
  newModalRef: BsModalRef;
  updateModalRef: BsModalRef;
  confirmModalRef: BsModalRef;

  // Filter Data Variable and Array
  filterby: any;
  ascending: boolean;
  isChecked: boolean;
  selectFilter: String;
  orderFilter: String;
  filterActive: boolean;
  minRangeVal: any;
  maxRangeVal: any;
  rangeStart: any;
  rangeEnd: any;
  rangeStep: number;
  sliderRange: any;
  rangeName: any = 'salary';

  filterByList = [
    'salary',
    'points',
    'rebounds',
    'assists',
    'steals',
    'blocks'
  ];
  filterOrderList = ['Ascending', 'Descending'];

  // Show Loader
  isLoading = true;

  // Constructor Initialization
  constructor(
    private _playersService: PlayersService,
    private modalService: BsModalService
  ) {}

  // Methods and properting on ngOnInit
  ngOnInit() {
    this.getPlayers();
    this.ascending = true;
    this.orderFilter = 'Ascending';
    this.filterby = this.selectFilter = 'points';
    this.filterActive = this.isChecked = true;
  }
  // Get data of all the Players
  getPlayers() {
    this._playersService.getPlayersData().subscribe((players: Player[]) => {
      this.players = players;
      console.log(this.players);
      this.minMaxFilter(this.players, this.rangeName);
      this.isLoading = false;
    });
  }
  // Different Methods for Modal Open/Close
  newPlayerModal(template: TemplateRef<any>) {
    this.newModalRef = this.modalService.show(template, {
      class: 'add-player'
    });
  }
  updatePlayerModal(template: TemplateRef<any>, palyerId) {
    this.playerId = palyerId;
    this.updateModalRef = this.modalService.show(template, {
      class: 'update-player'
    });
  }
  confirmDeleteModal(template: TemplateRef<any>, playerId) {
    this.playerId = playerId;
    this.confirmModalRef = this.modalService.show(template, {
      class: 'confirm-delete'
    });
  }
  confirm(): void {
    this.deletePlayer(this.playerId);
    this.confirmModalRef.hide();
  }
  decline(): void {
    this.confirmModalRef.hide();
  }

  minMaxFilter = (arr, fitlerName) => {
    this.minRangeVal = arr.reduce(
      (min, p) => (p[fitlerName] < min ? p[fitlerName] : min),
      arr[0][fitlerName]
    );

    this.maxRangeVal = arr.reduce(
      (max, p) => (p[fitlerName] > max ? p[fitlerName] : max),
      arr[0][fitlerName]
    );
    console.log('MaxValue C-125: ' + this.maxRangeVal);
    console.log('MinValue C-126: ' + this.minRangeVal);
    this.rangeStart = this.minRangeVal;
    this.rangeEnd = this.maxRangeVal;
    this.rangeStep = Math.round((this.maxRangeVal - this.minRangeVal) / 10);
    this.sliderRange = [this.rangeStart, this.rangeEnd];
    console.log('sliderRange : ' + this.sliderRange);
  }

  // Differents methods of filtering the table data
  updateFilter(filterName) {
    this.filterby = filterName;
  }
  checkValue(event: any) {
    this.filterActive = event;
  }

  updateOrder(filterOrder) {
    if (filterOrder === 'Ascending') {
      this.ascending = true;
    }
    if (filterOrder === 'Descending') {
      this.ascending = false;
    }
  }

  onChange(event) {
    this.rangeStart = event[0];
    this.rangeEnd = event[1];
    console.log('Range Start C-127 : ' + this.rangeStart);
    console.log('Range End C-128 : ' + this.rangeEnd);
    this.sliderRange = [this.rangeStart, this.rangeEnd];
  }
  deletePlayer(id) {
    this._playersService.deletePlayer(id).subscribe(response => {
      this.getPlayers();
    });
  }
}
