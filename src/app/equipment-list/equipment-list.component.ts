import {Component, OnInit, OnChanges} from '@angular/core';
import {EquipmentService} from "../equipment.service";
import {Equip} from "../equip";

@Component({
    selector: 'app-equipment-list',
    templateUrl: './equipment-list.component.html',
    styleUrls: ['./equipment-list.component.css']
})
export class EquipmentListComponent implements OnInit {

    constructor(private eqService: EquipmentService) {
    }

    equipmentList: Equip[];

    selectedEquip: Equip;

    debug: any;

    onCardClick(equip): void {
        if (this.selectedEquip === equip) {
            this.selectedEquip = null;
        } else {
            this.selectedEquip = equip;
        }
    }

    newEquip(): void {
        this.selectedEquip = new Equip();
    }

    updateEquip(): void {
        if ( this.equipmentList.indexOf( this.selectedEquip ) != -1 ) {
            this.eqService.updateEquip( this.selectedEquip ).subscribe(()=>{ this.getEquipment() });
        } else {
            this.eqService.createEquipment( this.selectedEquip ).subscribe(()=>{ this.getEquipment() });
            this.selectedEquip = null;
        }
    }

    getEquipment(): void {
        this.eqService.getEquipmentList().subscribe(e => {
            this.equipmentList = e;
        });
    }

    deleteEquip(): void {
        this.eqService.deleteEquipment( this.selectedEquip ).subscribe( () => {
            this.getEquipment();
            this.selectedEquip = null;
        } );
    }

    ngOnInit() {
        this.getEquipment();
    }
}
