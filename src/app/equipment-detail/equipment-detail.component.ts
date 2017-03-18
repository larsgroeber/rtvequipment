import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Equip} from "../equip";

@Component({
    selector: 'app-equipment-detail',
    templateUrl: './equipment-detail.component.html',
    styleUrls: ['./equipment-detail.component.css']
})
export class EquipmentDetailComponent implements OnInit {

    constructor() {
    }

    // TODO: get this from database
    locations: string[] = [
        "Studio",
        "FIAS"
    ];

    @Input()
    isNew: boolean;

    @Input()
    equip: Equip;

    @Output()
    onClickSave: EventEmitter<any> = new EventEmitter();

    @Output()
    onClickDelete: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
    }

}
